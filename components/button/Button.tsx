import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FunctionComponent,
  ReactNode,
  useMemo,
} from "react";

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
  const className = useMemo(() => {
    let base = `group appearance-none hover:appearance-none focus:appearance-none \
bg-[#2B85BF] hover:bg-[#5fb9f1] active:bg-[#123750] disabled:bg-[#A3A3A3] rounded-[12px] \
w-${width ? `[${width}]` : "full"} h-${
      height ? `[${height}]` : "full"
    } transition-colors ${extraClassNames}`;

    return base;
  }, [extraClassNames, height, width]);

  console.log(className);

  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
