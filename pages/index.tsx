import type { NextPage } from "next";
import Router from "next/router";
import { useCallback, useState } from "react";
import TextInputWithButton from "../components/input/TextInputWithButton";
import useGlobalStore from "../hooks/store/useGlobalStore";

const checkUsernameLength = (username: string) =>
  username.length > 2 && username.length < 16;

const Home: NextPage = () => {
  const [usernameInput, setUsernameInput] = useState("");
  const { setUsername } = useGlobalStore.getState();

  const onClick = useCallback(() => {
    if (!checkUsernameLength(usernameInput)) return;

    setUsername(usernameInput);
    Router.push("/chat");
  }, [setUsername, usernameInput]);

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
          btnDisabled={!checkUsernameLength(usernameInput)}
          onChange={(value) => setUsernameInput(value)}
          onClick={onClick}
        />
      </main>
    </div>
  );
};

export default Home;
