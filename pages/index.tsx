import Head from "next/head";
import React from "react";
import CookieGame from "./cookieGame";
import Settings from "./settings";

export default function Home() {
  const [gameBackground, setGameBackground] = React.useState(false);
  const [settingsBackground, setSettingsBackground] = React.useState(true);

  const onSubmitGame = () => {
    setGameBackground(true);
    setSettingsBackground(false);
  };

  return (
    <>
      <Head>
        <title>Sorting game</title>
      </Head>

      <main>
        {settingsBackground && <Settings onSubmitGame={onSubmitGame} />}

        {gameBackground && <CookieGame />}
      </main>
    </>
  );
}
