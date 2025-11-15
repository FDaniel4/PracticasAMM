import React, { useState } from "react";
import { ScrollView } from "react-native";
import { VStack } from "@/components/ui/vstack";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";

import { Ionicons } from "@expo/vector-icons";
import {
  Checkbox,
  CheckboxGroup,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
} from "@/components/ui/checkbox";
import { HStack } from "@/components/ui/hstack";
import { CheckIcon, Icon } from "@/components/ui/icon";
import { Link, LinkText } from "@/components/ui/link";
import { Pressable } from "@/components/ui/pressable";
import {
  Radio,
  RadioGroup,
  RadioIcon,
  RadioIndicator,
  RadioLabel,
} from "@/components/ui/radio";
import { CircleIcon } from "@/components/ui/icon";

import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
} from "@/components/ui/select";
import { ChevronDownIcon, AlertCircleIcon } from "@/components/ui/icon";
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlHelper,
  FormControlHelperText,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
} from "@/components/ui/form-control";

import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@/components/ui/slider";

import { Switch } from "@/components/ui/switch";

import { Textarea, TextareaInput } from "@/components/ui/textarea";

// import { CheckIcon, ChevronDownIcon } from 'lucide-react-native';

export default function FormsScreen() {
  const [values, setValues] = React.useState(["Illustration"]);
  const [valuesR, setValuesR] = React.useState("1st");
  const [sliderValue, setSliderValue] = useState(30);
  const [color, setColor] = useState("");

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ padding: 16, gap: 16 }}
    >
      <VStack space="md" reversed={false}>
        <CheckboxGroup
          value={values}
          onChange={(keys) => {
            setValues(keys);
          }}
        >
          <HStack space="2xl">
            <Checkbox value="Illustration">
              <CheckboxIndicator>
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
              <CheckboxLabel>Ilustración</CheckboxLabel>
            </Checkbox>
            <Checkbox value="Animation">
              <CheckboxIndicator>
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
              <CheckboxLabel>Animación</CheckboxLabel>
            </Checkbox>
            <Checkbox value="Typography">
              <CheckboxIndicator>
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
              <CheckboxLabel>Tipografia</CheckboxLabel>
            </Checkbox>
          </HStack>
        </CheckboxGroup>
      </VStack>
      <VStack space="sm">
        <Text size="lg">Go to&nbsp;</Text>
        <Link href="https://gluestack.io/" isExternal>
          <HStack>
            <LinkText size="lg">Pinterest</LinkText>
            <Ionicons name="alert-circle-outline" color={"red"} size={20}/>
          </HStack>
        </Link>
      </VStack>
      <VStack>
        <Pressable className="py-3 px-5 bg-primary-700 rounded-lg">
          {({ pressed }) => (
            <Text
              className={`font-semibold text-center
                    ${pressed ? "text-pink-400" : "text-amber-400"}`}
            >
              PRESSABLE
            </Text>
          )}
        </Pressable>
      </VStack>
      <RadioGroup value={valuesR} onChange={setValuesR}>
        <VStack space="sm">
          <Radio value="1st">
            <RadioIndicator>
              <RadioIcon as={CircleIcon} />
            </RadioIndicator>
            <RadioLabel>Apartamento</RadioLabel>
          </Radio>
          <Radio value="2nd">
            <RadioIndicator>
              <RadioIcon as={CircleIcon} />
            </RadioIndicator>
            <RadioLabel>Casa</RadioLabel>
          </Radio>
          <Radio value="3rd">
            <RadioIndicator>
              <RadioIcon as={CircleIcon} />
            </RadioIndicator>
            <RadioLabel>Rancho</RadioLabel>
          </Radio>
        </VStack>
      </RadioGroup>

      <FormControl>
        <FormControlLabel>
          <FormControlLabelText>
            Escoge tu color favorito
          </FormControlLabelText>
        </FormControlLabel>

        <Select selectedValue={color} onValueChange={(value) => setColor(value)}>
          <SelectTrigger>
            <SelectInput
              placeholder="Selecciona una opción"
              className="flex-1"
            />
            <SelectIcon as={ChevronDownIcon} className="mr-3" />
          </SelectTrigger>

          <SelectPortal>
            <SelectBackdrop />
            <SelectContent>
              <SelectDragIndicatorWrapper>
                <SelectDragIndicator />
              </SelectDragIndicatorWrapper>

              <SelectItem label="Rojo" value="red" />
              <SelectItem label="Azul" value="blue" />
              <SelectItem label="Negro" value="black" />
              <SelectItem label="Rosa" value="pink"  />
              <SelectItem label="Verde" value="green" />
            </SelectContent>
          </SelectPortal>
        </Select>

        <FormControlHelper>
          <FormControlHelperText>
            Solo se puede seleccionar una opción
          </FormControlHelperText>
        </FormControlHelper>

        {color === "" && (
          <FormControlError>
            <FormControlErrorIcon as={AlertCircleIcon} />
            <FormControlErrorText>Campo obligatorio</FormControlErrorText>
          </FormControlError>
        )}
      </FormControl>

      <VStack space="md" className="w-full">
        <Text className="font-semibold">
          Valor actual: {Math.floor(sliderValue)}
        </Text>
        <Slider
          value={sliderValue}
          minValue={0}
          maxValue={100}
          size="md"
          orientation="horizontal"
          isDisabled={false}
          isReversed={false}
          onChange={(v) => {
            setSliderValue(v);
          }}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </VStack>

      <HStack space="md">
        <Switch
          defaultValue={true}
          trackColor={{ false: "#d4d4d4", true: "#525252" }}
          thumbColor="#fafafa"
          ios_backgroundColor="#d4d4d4"
        />
        <Text size="sm">Perfil publico</Text>
      </HStack>
      <FormControl size="sm" className="max-w-[250px] w-full">
        <FormControlLabel>
          <FormControlLabelText>Escribe</FormControlLabelText>
        </FormControlLabel>
        <Textarea>
          <TextareaInput placeholder="Habia una vez..." />
        </Textarea>
        <FormControlHelper>
          <FormControlHelperText>Empieza tu historia</FormControlHelperText>
        </FormControlHelper>
      </FormControl>
    </ScrollView>
  );
}
