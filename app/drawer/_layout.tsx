import React from 'react'
import 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer'
import { Ionicons } from '@expo/vector-icons';
import CustomDrawer from '@/components/shared/CustomDrawer';

import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

const DrawerLayout = () => {
  return (
    <GluestackUIProvider>
      <Drawer
          drawerContent={CustomDrawer}
          screenOptions={{
              overlayColor:'rgba(0,0,0,0.5)',
              drawerActiveTintColor:'red',
              sceneStyle:{
                  backgroundColor:'white'
              },
          }}
      >
        <Drawer.Screen
          name="forms/index" 
          
          options={{
            drawerLabel: 'Forms',
            title: 'Francisco Daniel Palacio Hernández',
            drawerIcon:({color,size})=>(
              <Ionicons name='alert-circle-outline'
              size={size} color={color}>
              </Ionicons>
            )
          }}
        />
        <Drawer.Screen
          name="profile/ProfileScreen" 
          
          options={{
            drawerLabel: 'Perfil',
            title: 'Francisco Daniel Palacio Hernández',
            drawerIcon:({color,size})=>(
              <Ionicons name='person-outline'
              size={size} color={color}>
              </Ionicons>
            )
          }}
        />
        <Drawer.Screen
          name="display/DisplayScreen" 
          
          options={{
            drawerLabel: 'Display',
            title: 'Francisco Daniel Palacio Hernández',
            drawerIcon:({color,size})=>(
              <Ionicons name='eye-outline'
              size={size} color={color}>
              </Ionicons>
            )
          }}
        />
      </Drawer>
    </GluestackUIProvider> 
  )
}

export default DrawerLayout