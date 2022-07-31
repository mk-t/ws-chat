import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FunctionComponent,
  ReactNode,
  useMemo,
} from "react";
import usePropsDimensions from "../../hooks/usePropsDimensions";

export interface ButtonProps {
  onClick?: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >["onClick"];
  height?: string;
  width?: string;
  extraClassNames?: string;
  children?: ReactNode;
  disabled?: boolean;
}

const Button: FunctionComponent<ButtonProps> = ({
  onClick,
  height,
  width,
  extraClassNames,
  children,
  disabled,
}) => {
  const className = useMemo(
    () =>
      `group appearance-none hover:appearance-none focus:appearance-none \
bg-[#2B85BF] hover:bg-[#5fb9f1] active:bg-[#123750] disabled:bg-[#A3A3A3] rounded-[12px] \
${width ? "" : "w-full"} ${
        height ? "" : "h-full"
      } transition-colors ${extraClassNames}`,
    [extraClassNames, height, width]
  );

  const style = usePropsDimensions(width, height);

  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
