export default function Input({
  placeholder = "Enter City Name",
  ariaLabel = "Enter City Name",
  type = "text",
  className = "form-control",
  onInput = () => {},
}) {
  // reusable input component
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      aria-label={ariaLabel}
      onInput={onInput}
    />
  );
}
