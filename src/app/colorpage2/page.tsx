import ColorBlock from "@/components/ColorBlock";
import { ColorBlockDynamic } from "@/components/dynamic-barrel";

export default function ColorPage2() {
  return (
    <div>
      <ColorBlockDynamic color="#000000" text="You see me later" />
      <ColorBlockDynamic color="#c10404" text="You see me later 2" />
      <ColorBlock color="#e1dc49" text="You see me first" />
    </div>
  );
}
