import * as CheckboxRadix from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { ComponentPropsWithoutRef } from "react";

function Checkbox({
  ...delegate
}: ComponentPropsWithoutRef<typeof CheckboxRadix.Root>) {
  return (
    <CheckboxRadix.Root
      className="size-[1.125rem] border border-[##707070]"
      {...delegate}
    >
      <CheckboxRadix.Indicator>
        <Check className="size-4 text-gray-600" />
      </CheckboxRadix.Indicator>
    </CheckboxRadix.Root>
  );
}

export default Checkbox;
