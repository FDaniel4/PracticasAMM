import React from "react";
import { ScrollView, Image } from "react-native";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  AvatarBadge,
} from "@/components/ui/avatar";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Button, ButtonIcon } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import { Pressable } from "@/components/ui/pressable";
import { Heart, Users, EyeOff } from "lucide-react-native";

const ProfileScreen = () => {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#fff" }}
      contentContainerStyle={{ padding: 16, gap: 16 }}
    >
      {/* Encabezado */}
      <VStack space="xl" style={{ alignItems: "center" }}>
        <Avatar size="xl">
          <AvatarImage source={require("@/assets/images/chida (1).jpg")} />
          <AvatarBadge />
        </Avatar>

        <VStack style={{ alignItems: "center" }}>
          <Heading size="md">Daniel Palacio</Heading>
          <Text size="sm" style={{ color: "#666" }}>
            Estudiante de TI
          </Text>
          <Text size="sm" style={{ color: "#999" }}>
            Aguascalientes
          </Text>
        </VStack>
      </VStack>

      {/* Métricas */}
      <HStack
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 16,
        }}
        space="3xl" // 🔹 aumenta el espacio horizontal entre los VStack
      >
        <VStack style={{ alignItems: "center" }}>
          <Heading size="sm">44</Heading>
          <Text size="sm" style={{ color: "#666" }}>
            Following
          </Text>
        </VStack>

        <Divider
          style={{ height: 25, borderColor: "#ccc" }}
          orientation="vertical"
        />

        <VStack style={{ alignItems: "center" }}>
          <Heading size="sm">4</Heading>
          <Text size="sm" style={{ color: "#666" }}>
            Followers
          </Text>
        </VStack>

        <Divider
          style={{ height: 25, borderColor: "#ccc" }}
          orientation="vertical"
        />

        <VStack style={{ alignItems: "center" }}>
          <Heading size="sm">0</Heading>
          <Text size="sm" style={{ color: "#666" }}>
            Likes
          </Text>
        </VStack>
      </HStack>

      {/* Botones de acción */}
      <HStack
        style={{ justifyContent: "center", marginTop: 24 }}
        space="3xl" // 🔹 más separación horizontal entre botones
      >
        <Button
          size="lg"
          style={{
            backgroundColor: "#2563EB",
            borderRadius: 9999,
            width: 60,
            height: 60,
          }}
        >
          <ButtonIcon as={Users} color="#fff" />
        </Button>

        <Button
          size="lg"
          style={{
            backgroundColor: "#EC4899",
            borderRadius: 9999,
            width: 60,
            height: 60,
          }}
        >
          <ButtonIcon as={Heart} color="#fff" />
        </Button>

        <Button
          size="lg"
          style={{
            backgroundColor: "#9CA3AF",
            borderRadius: 9999,
            width: 60,
            height: 60,
          }}
        >
          <ButtonIcon as={EyeOff} color="#fff" />
        </Button>
      </HStack>

      {/* Galería */}
      <VStack space="sm">
        <Heading size="sm">Gallery</Heading>
        <VStack style={{ alignItems: "center"}}>
          {/* 🔹 Imagen grande horizontal arriba */}
          <Image
            source={require("@/assets/images/R.jpeg")}
            style={{
              width: "100%",
              height: 180,
              borderRadius: 16,
            }}
            resizeMode="cover"
          />
        </VStack>

        <HStack style={{ justifyContent: "space-between" }}>
          {[
            require("@/assets/images/F.png"),
            require("@/assets/images/OIP.jpeg"),
            require("@/assets/images/OIP.webp"),
          ].map((img, i) => (
            <Pressable key={i}>
              <Image
                source={img}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 16,
                }}
              />
            </Pressable>
          ))}
        </HStack>
      </VStack>
    </ScrollView>
  );
};

export default ProfileScreen;