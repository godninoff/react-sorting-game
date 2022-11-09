import Head from "next/head";
import React from "react";
import CookieGame from "./cookieGame";
import Settings, { IDefaultState } from "./settings";

export default function Home() {
  const [gameBackground, setGameBackground] = React.useState(false);
  const [settingsBackground, setSettingsBackground] = React.useState(true);
  const [settings, setSettings] = React.useState({
    quantity: 2,
    values: "A",
    sorted: "increase",
  });

  const onSubmitGame = () => {
    setGameBackground(true);
    setSettingsBackground(false);
  };

  const onSettings = (options: IDefaultState) => {
    setSettings(options);
  };

  return (
    <>
      <Head>
        <title>Sorting game</title>
      </Head>

      <main>
        {settingsBackground && (
          <Settings
            onSubmitGame={onSubmitGame}
            title={""}
            setSettings={onSettings}
          />
        )}

        {gameBackground && <CookieGame settings={settings} />}
      </main>
    </>
  );
}
