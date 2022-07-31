import { FunctionComponent } from "react";
import Button, { ButtonProps } from "../button/Button";
import TextInput, { TextInputProps } from "./TextInput";

interface TextInputWithButtonProps extends TextInputProps {
  onClick?: ButtonProps["onClick"];
  btnDisabled?: ButtonProps["disabled"];
}

const TextInputWithButton: FunctionComponent<TextInputWithButtonProps> = (
  props
) => {
  return (
    <TextInput {...props}>
      <Button
        width="auto"
        extraClassNames="absolute top-0 left-[83%] right-0"
        disabled={props.btnDisabled}
      >
        <div className="relative w-full h-full p-0 m-0">
          <svg
            width="20"
            className="absolute p-0 m-0 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]
						 group-active:fill-[#5fb9f1] group-disabled:fill-white
						  transition-colors"
            height="23"
            viewBox="0 0 20 23"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 9.76795C20.3333 10.5378 20.3333 12.4623 19 13.2321L3.25 22.3253C1.91667 23.0951 0.250001 22.1329 0.250001 20.5933L0.250002 2.40673C0.250002 0.867131 1.91667 -0.0951185 3.25 0.674682L19 9.76795Z"
              fill="inherit"
            />
          </svg>
        </div>
      </Button>
    </TextInput>
  );
};

export default TextInputWithButton;
