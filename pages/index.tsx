import type { NextPage } from "next";
import { useState } from "react";
import TextInputWithButton from "../components/input/TextInputWithButton";

const Home: NextPage = () => {
  const [usernameInput, setUserNameInput] = useState("");

  return (
    <div>
      <main className="flex flex-col items-center justify-center min-h-[80vh]">
        <p className="font-lato text-[48px] font-semibold text-center">
          ws-chat
        </p>
        <p className="font-lato text-[24px] font-light text-center mt-2 text-[#4B4B4B]">
          Enter your username
        </p>
        <TextInputWithButton
          width="440px"
          extraClassNames="mt-5"
          btnDisabled={
            !(usernameInput.length >= 3 && usernameInput.length < 16)
          }
          onChange={(value) => setUserNameInput(value)}
        />
      </main>
    </div>
  );
};

export default Home;
