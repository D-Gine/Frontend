"use client";
import Text from "@components/Text/Text";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div style={{}} className="">
      <Text text_color={"secondary"}>test</Text>
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
