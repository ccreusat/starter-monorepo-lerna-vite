import { TableProps } from "./TableProps";

/**
 * Primary UI component for user interaction
 */
export const Table = ({
  primary = false,
  size = "large",
  backgroundColor,
  label,
  ...props
}: TableProps) => {
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

export default Table;
