import React from "react";
import { Slot } from "expo-router";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "@/global.css";

const RootLayout = () => {
  return (
    <GluestackUIProvider>
        <Slot />
    </GluestackUIProvider>
  );
};

export default RootLayout;
