import { DropdownProps } from "./DropdownProps";

/**
 * Primary UI component for user interaction
 */
export const Dropdown = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: DropdownProps) => {
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

export default Dropdown;
