import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSee = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.14 12a18.68 18.68 0 0 0 2.464 3.316C6.397 17.226 8.9 19 12 19c3.1 0 5.605-1.774 7.395-3.684A18.684 18.684 0 0 0 21.86 12a18.681 18.681 0 0 0-2.464-3.316C17.605 6.774 15.101 5 12 5 8.9 5 6.396 6.774 4.605 8.684A18.678 18.678 0 0 0 2.14 12ZM23 12l.894-.448-.002-.003-.003-.007-.011-.022a10.615 10.615 0 0 0-.192-.354 20.675 20.675 0 0 0-2.831-3.85C18.895 5.226 15.899 3 12 3 8.1 3 5.104 5.226 3.145 7.316a20.674 20.674 0 0 0-2.831 3.85 12.375 12.375 0 0 0-.192.354l-.011.022-.003.007-.002.002s0 .002.894.449l-.894-.447a1 1 0 0 0 0 .894L1 12l-.894.447.002.004.003.007.011.022a8.267 8.267 0 0 0 .192.354 20.67 20.67 0 0 0 2.831 3.85C5.105 18.774 8.1 21 12 21c3.9 0 6.895-2.226 8.855-4.316a20.672 20.672 0 0 0 2.831-3.85 11.81 11.81 0 0 0 .192-.354l.011-.022.003-.007.002-.002s0-.002-.894-.449Zm0 0 .894.447c.141-.281.14-.613 0-.895L23 12Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSee;
