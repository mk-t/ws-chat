import {
  useEffect,
  useState,
  ReactNode,
  FunctionComponent,
  useMemo,
} from "react";

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

  const btnClassName = useMemo(
    () => `font-leco appearance-none hover:appearance-none
				active:appearance-none focus:outline-none border-none active:border-none
				bg-[#E9E9E9] p-[24px] rounded-[12px] w-${width ? `[${width}]` : "full"} h-[${
      height ?? "64px"
    }]
				text-[24px] font-regular text-[#404040]`,
    [width, height]
  );

  useEffect(() => {
    text !== null && onChange?.(text);
  }, [onChange, text]);

  return (
    <div className={`${children ? "relative" : ""} ${extraClassNames ?? ""}`}>
      <input
        onChange={(event) => setText(event.target.value)}
        type="text"
        className={btnClassName}
      />
      {children}
    </div>
  );
};

export default TextInput;
