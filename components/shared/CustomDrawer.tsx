import React from 'react';
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Text } from '@/components/ui/text';
import { Box } from '@/components/ui/box';

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props} scrollEnabled={false}>

      <Box className="flex justify-center items-center mx-3 p-10 mb-10 h-[150px] rounded-xl bg-error-500">
          <Box className="flex justify-center items-center bg-white rounded-full h-24 w-24">
              <Text className="text-warning-400 font-bold text-3xl">DP</Text>
          </Box>
      </Box>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}

export default CustomDrawer;