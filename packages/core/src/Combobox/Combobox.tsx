import { ComboboxProps } from "./ComboboxProps";

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ComboboxProps) => {
  const mode = primary ? "btn-primary" : "btn-secondary";
  return (
    <button
      type="button"
      className={["btn", `btn-${size}`, mode].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
