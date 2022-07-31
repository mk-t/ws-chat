import {
  useEffect,
  useState,
  ReactNode,
  FunctionComponent,
  useMemo,
} from "react";
import usePropsDimensions from "../../hooks/usePropsDimensions";

export interface TextInputProps {
  width?: string;
  height?: string;
  onChange?: (value: string) => void;
  children?: ReactNode;
  extraClassNames?: string;
}

const TextInput: FunctionComponent<TextInputProps> = ({
  width,
  height,
  onChange,
  children,
  extraClassNames,
}) => {
  const [text, setText] = useState<string | null>(null);

  const className = useMemo(
    () =>
      `font-leco appearance-none hover:appearance-none active:appearance-none focus:outline-none
bg-[#E9E9E9] p-[24px] rounded-[12px] ${width ? "" : "w-full"}
${height ? "" : "h-full"} text-[24px] font-regular text-[#404040] m-0`,
    [width, height]
  );

  const style = usePropsDimensions(width, height ?? "64px");

  useEffect(() => {
    text !== null && onChange?.(text);
  }, [onChange, text]);

  return (
    <div
      className={`${children ? "relative" : ""} ${extraClassNames ?? ""}`}
      style={style}
    >
      <input
        onChange={(event) => setText(event.target.value)}
        type="text"
        className={className}
        style={style}
      />
      {children}
    </div>
  );
};

export default TextInput;
