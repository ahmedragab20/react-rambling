import { Input } from "@nextui-org/react";

export default function SearchInput({
  placeholder = "Enter City Name",
  ariaLabel = "Enter City Name",
  onInput = () => {},
}) {
  // reusable input component
  return (
    <Input
      placeholder={placeholder}
      aria-label={ariaLabel}
      onInput={onInput}
      clearable
    />
  );
}
