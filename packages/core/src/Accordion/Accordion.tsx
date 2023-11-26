import { AccordionProps } from "./AccordionProps";

/**
 * Primary UI component for user interaction
 */
export const Accordion = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: AccordionProps) => {
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

export default Accordion;
