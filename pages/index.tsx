import Head from "next/head";
import React from "react";
import CookieGame from "./gamePage";
import StartMenu from "./StartMenu";

export default function Home() {
  const [gameBackground, setGameBackground] = React.useState<boolean>(false);
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
        {settingsBackground && <StartMenu onSubmitGame={onSubmitGame} />}

        {gameBackground && (
          <CookieGame
            quantity={[]}
            values={[]}
            sorted={""}
            choosenQuantity={0}
            choosenValue={""}
            choosenSort={""}
            setGameBackground={setGameBackground}
            setSettingsBackground={setSettingsBackground}
          />
        )}
      </main>
    </>
  );
}
