import React from "react";
import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Image, ScrollView } from "react-native";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Center } from "@/components/ui/center";
import {
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableHead,
  TableData,
  TableCaption,
} from "@/components/ui/table";
import {
  Toast,
  ToastTitle,
  ToastDescription,
  useToast,
} from "@/components/ui/toast";
import { HelpCircleIcon, CloseIcon, Icon } from "@/components/ui/icon";
import { ShoppingCart, AlertCircle, CheckCircle } from "lucide-react-native";
import { Pressable } from "@/components/ui/pressable";
import { HStack } from "@/components/ui/hstack";
import { Badge, BadgeText, BadgeIcon } from "@/components/ui/badge";

// Tipos
type ProductStatus = "selected" | "soldout" | "none";

interface Product {
  name: string;
  size: string;
  status: ProductStatus;
}

const DisplayScreen = () => {
  const toast = useToast();

  const showSuccessToast = () => {
    toast.show({
      placement: "top", 
      render: ({ id }) => {
        const toastId = "toast-" + id;
        return (
          <Toast nativeID={toastId} action="success" variant="solid" style={{marginBottom:10}}>
            <HStack space="sm" style={{alignItems:"center"}}>
              <Icon as={CheckCircle} size="lg" color="green" />
              <VStack>
                <ToastTitle style={{color:"green"}}>¡Éxito!</ToastTitle>
                <ToastDescription style={{color:"white"}}>
                  Tu pedido fue realizado con éxito. ¡Gracias por comprar con
                  nosotros!
                </ToastDescription>
              </VStack>
            </HStack>
          </Toast>
        );
      },
    });
  };

  const handleAddToCart = () => {
    showSuccessToast();
  };

  const productData: Product[] = [
    { name: "Camisa", size: "Larga", status: "selected" },
    { name: "Tennis", size: "25 cm", status: "soldout" },
    { name: "Gorra", size: "7/1", status: "selected" },
    { name: "Sudadera", size: "Grande", status: "none" },
    { name: "Guantes", size: "Numero 5", status: "soldout" },
    { name: "Calzones", size: "Numero 10", status: "selected" },
  ];

  const renderStatus = (status: ProductStatus) => {
    if (status === "soldout") {
      return (
        <Badge action="error" variant="solid" size="md">
          <BadgeIcon as={AlertCircle} />
          <BadgeText>Agotado</BadgeText>
        </Badge>
      );
    } else if (status === "selected") {
      return <Icon as={ShoppingCart} className="stroke-success-500 mt-0.5" />;
    } else {
      return <Text>-</Text>;
    }
  };

  return (
      <ScrollView>
        <Center justify-center items-center>
          <Card className="p-5 rounded-lg max-w-[360px] m-3">
            <Center>
              <Image
                width={250}
                height={250}
                source={require("@/assets/images/chida (1).jpg")}
                className="mb-6 h-[240px] w-full rounded-md aspect-[4/3]"
                alt="image"
              />
            </Center>

            <Text className="text-sm font-normal mb-2 text-typography-700">
              Estudiante de TI
            </Text>

            <VStack className="mb-6">
              <Heading size="md" className="mb-4">
                Daniel Palacio
              </Heading>
              <Text size="sm">
                Floral embroidered notch neck thread work cotton kurta in white
                and black.
              </Text>
            </VStack>

            <Box className="flex-col sm:flex-row">
              <Button
                className="px-4 py-2 mr-0 mb-3 sm:mr-3 sm:mb-0 sm:flex-1"
                onPress={handleAddToCart}
              >
                <ButtonText size="sm">Add to cart</ButtonText>
              </Button>
              <Button
                variant="outline"
                className="px-4 py-2 border-outline-300 sm:flex-1"
              >
                <ButtonText size="sm" className="text-typography-600">
                  Wishlist
                </ButtonText>
              </Button>
            </Box>
          </Card>

          <Box style={{ width: 100, height: 10 }} />

          <Card className="p-0 rounded-lg w-full max-w-[320px] m-3 overflow-hidden">
            <Box className="w-full">
              <Table className="w-full">
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead>ST</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {productData.map((item, index) => (
                    <TableRow key={index}>
                      <TableData>{item.name}</TableData>
                      <TableData className="font-normal">{item.size}</TableData>
                      <TableData>{renderStatus(item.status)}</TableData>
                    </TableRow>
                  ))}
                </TableBody>
                <TableCaption className="font-normal">
                  Vista de más detalles
                </TableCaption>
              </Table>
            </Box>
          </Card>
        </Center>
      </ScrollView>
  );
};

export default DisplayScreen;
