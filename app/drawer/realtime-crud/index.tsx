import React, { useState, useEffect } from "react";
import { View, TextInput, Text, Button, FlatList, ListRenderItem } from "react-native";
import { db } from "@/firebaseConfig";
import { ref, set, onValue, remove, update, push } from "firebase/database";
import { Bold } from "lucide-react-native";

type User = {
  id: string;
  username: string;
  email: string;
};

export default function RealtimeCrud() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [users, setUsers] = useState<User[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);

  const saveUser = () => {
    if (!username.trim() || !email.trim()) return;

    if (editingId) {
      // Modo edición
      update(ref(db, `users/${editingId}`), { username, email });
      setEditingId(null);
    } else {
      // Nuevo registro
      const usersRef = ref(db, "users");
      const newUser = push(usersRef);
      set(newUser, { username, email });
    }

    resetForm();
  };

  const resetForm = () => {
    setUsername("");
    setEmail("");
    setEditingId(null);
  };

  const startEditing = (user: User) => {
    setUsername(user.username);
    setEmail(user.email);
    setEditingId(user.id);
  };

  useEffect(() => {
    const usersRef = ref(db, "users");
    const unsubscribe = onValue(usersRef, (snapshot) => {
      const data = snapshot.val() ?? {};
      const list: User[] = Object.keys(data).map((key) => ({
        id: key,
        username: data[key].username,
        email: data[key].email,
      }));
      setUsers(list);
    });

    return () => unsubscribe();
  }, []);

  const deleteUser = (id: string) => {
    remove(ref(db, `users/${id}`));
    if (editingId === id) resetForm();
  };

  const renderItem: ListRenderItem<User> = ({ item }) => (
    <View style={{ marginTop: 10, padding: 12, borderWidth: 1, borderRadius: 8 }}>
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item.username}</Text>
      <Text style={{ fontSize: 14, opacity: 0.7 }}>{item.email}</Text>
      <Button title="Editar" onPress={() => startEditing(item)} />
      <Button title="Eliminar" onPress={() => deleteUser(item.id)} />
    </View>
  );

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>
        {editingId ? "Editando Usuario" : "Nuevo Usuario"}
      </Text>

      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={{
          borderWidth: 1,
          padding: 8,
          marginBottom: 10,
          borderRadius: 8,
          borderColor: editingId ? "#ff9900" : "#000",
        }}
      />

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{
          borderWidth: 1,
          padding: 8,
          marginBottom: 10,
          borderRadius: 8,
          borderColor: editingId ? "#ff9900" : "#000",
        }}
      />

      <Button
        title={editingId ? "Guardar Cambios" : "Agregar Usuario"}
        onPress={saveUser}
        color={editingId ? "#ff9900" : undefined}
      />

      {editingId && (
        <Button title="Cancelar edición" onPress={resetForm} color="#555" />
      )}

      <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 12 }}>
  Usuarios registrados: {users.length}
</Text>


{users.length === 0 ? (
  <View
    style={{
      padding: 20,
      alignItems: "center",
      marginTop: 40,
      backgroundColor: "#f0f0f0",
      borderRadius: 12,
    }}
  >
    <Text style={{ fontSize: 16, color: "#666", textAlign:"center" }}>
      Agrega un usuario en el formulario para que aprezca aquí.
    </Text>
    
  </View>
) : (
  <FlatList
    data={users}
    keyExtractor={(item) => item.id}
    renderItem={renderItem}
    contentContainerStyle={{ paddingBottom: 20 }}
    style={{ marginTop: 10 }}
    ItemSeparatorComponent={() => (
      <View style={{ height: 10 }} /> // Separador entre cada usuario
    )}
  />
)}

    </View>
  );
}
