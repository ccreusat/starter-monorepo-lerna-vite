import { ToolbarProps } from "./ToolbarProps";

/**
 * Primary UI component for user interaction
 */
export const Toolbar = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ToolbarProps) => {
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

export default Toolbar;
