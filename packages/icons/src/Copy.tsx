import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCopy = ({
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
      d="M6.676 3c.284-.672.853-1 1.263-1h11.423c.566 0 1.438.628 1.438 1.923v13.154c0 1.056-.58 1.668-1.1 1.858V6.923C19.7 4.99 18.3 3 16.061 3H6.676Zm-2.272.007C4.765 1.41 6.056 0 7.939 0h11.423C21.599 0 23 1.99 23 3.923v13.154c0 1.865-1.303 3.782-3.403 3.916C19.235 22.59 17.944 24 16.06 24H4.638C2.401 24 1 22.01 1 20.077V6.923c0-1.865 1.303-3.782 3.404-3.916ZM3.2 6.923C3.2 5.628 4.072 5 4.638 5h11.423c.567 0 1.439.628 1.439 1.923v13.154c0 1.295-.872 1.923-1.439 1.923H4.638c-.566 0-1.438-.628-1.438-1.923V6.923Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgCopy;
