import Head from "next/head";
import React from "react";
import CookieGame from "./gamePage/gamePage";
import { useDispatch, useSelector } from "react-redux";
import StartMenu from "../startMenu/startMenu";
import { RootState } from "../store/store";
import { changeTheme } from "../store/themeSelector";

export default function Home() {
  const dispatch = useDispatch();
  const theme = useSelector(
    (state: RootState) => state.theme.settingsBackground
  );

  const onSubmitGame = () => {
    dispatch(changeTheme());
  };

  return (
    <>
      <Head>
        <title>Sorting game</title>
      </Head>

      <main>
        {theme && <StartMenu onSubmitGame={onSubmitGame} />}
        {!theme && <CookieGame />}
      </main>
    </>
  );
}
