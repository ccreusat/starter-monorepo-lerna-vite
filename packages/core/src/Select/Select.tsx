import { SelectProps } from "./SelectProps";

/**
 * Primary UI component for user interaction
 */
export const Select = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: SelectProps) => {
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

export default Select;
