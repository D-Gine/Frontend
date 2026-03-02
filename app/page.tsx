"use client";
import Text from "@components/Text/Text";
import { ColorType } from "@/interfaces/types/color_types";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className="">
      <Text text_color={ColorType.secondary}>test</Text>
      <Button
        on_click={() => {
          console.log("dsjhsdofhsd");
        }}
      >
        prout
      </Button>
    </div>
  );
}
