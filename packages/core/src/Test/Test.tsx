import { TestProps } from "./TestProps";

/**
 * Primary UI component for user interaction
 */
export const Test = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: TestProps) => {
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

export default Test;
