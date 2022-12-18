import styled from "@emotion/styled";
import React from "react";
import { useDispatch } from "react-redux";
import { Settings } from "../store";
import { store } from "../store/store";
import { setQuantity, setValue, setSorted } from "../store";
import {
  arrayRandElement,
  gameTheme,
  getRandomLetter,
  getUniqueValueInRange,
} from "../utils/utils";

type ImageProps = {
  coockieBg: string;
};

type CookiesImg = {
  cookiesImg: string;
};

type Popups = {
  popup: string;
};

type SortedProps = {
  sorted: string;
};

type PointerInc = {
  increase: string;
};

type PointerDec = {
  decrease: string;
};

type Pallete = {
  pallete: string;
  sorted: string;
};

const CookieGame: React.FC<Settings> = ({
  setGameBackground,
  setSettingsBackground,
}) => {
  const { settings } = store.getState();
  const dispatch = useDispatch();

  const [itemsCount, setItemsCount] = React.useState<number[]>([]);
  const [itemsCountPallete, setItemsCountPallete] = React.useState<number[]>(
    []
  );

  const [random, setRandom] = React.useState(arrayRandElement(gameTheme));
  const [endGame, setEndGame] = React.useState(false);

  const onResetGame = () => {
    dispatch(setQuantity(2));
    dispatch(setValue("A"));
    dispatch(setSorted("increase"));
    setEndGame(false);
    setGameBackground(false);
    setSettingsBackground(true);
  };

  const getRange = () => {
    if (settings.choosenValue === "A")
      return getRandomLetter(settings.choosenQuantity);
    if (settings.choosenValue === "9")
      return getUniqueValueInRange(settings.choosenQuantity, 1, 9);
    if (settings.choosenValue === "19")
      return getUniqueValueInRange(settings.choosenQuantity, 10, 19);
    if (settings.choosenValue === "50")
      return getUniqueValueInRange(settings.choosenQuantity, 20, 50);
    if (settings.choosenValue === "99")
      return getUniqueValueInRange(settings.choosenQuantity, 51, 99);
    if (settings.choosenValue === "999")
      return getUniqueValueInRange(settings.choosenQuantity, 100, 999);
  };

  React.useEffect(() => {
    const res = getRange() as number[];
    setItemsCount(res);
  }, []);

  React.useEffect(() => {
    let clone = itemsCount.slice(0);
    let sorted = clone.sort((a, b) => {
      if (settings.choosenSort === "increase") {
        if (a > b) {
          return 1;
        } else return -1;
      } else if (b > a) {
        return 1;
      } else return -1;
    });
    setItemsCountPallete(sorted);
  }, [itemsCount]);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const [state, setState] = React.useState(1);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const itemId = e.dataTransfer.getData("dataId");
    const getItemId = document.getElementById(itemId) as HTMLDivElement;
    const target = e.target as HTMLDivElement;

    if (itemId === target.id) {
      target.appendChild(getItemId);
      setState(state + 1);
      if (state === itemsCount.length) {
        setEndGame(true);
      }
    }
  };

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement> & { target: { id: string } }
  ) => {
    e.dataTransfer.setData("dataId", e.target.id);
  };

  return (
    <CookieGameBg coockieBg={random.background}>
      <CookieContainer>
        {itemsCount.map((el: number | string, index) => (
          <ItemWrapper>
            <CookiesImage
              id={`dataId-${String(el)}`}
              key={index}
              cookiesImg={arrayRandElement(random.items)}
              draggable={true}
              onDragStart={handleDragStart}
            >
              <CookieItem>{el}</CookieItem>
            </CookiesImage>
          </ItemWrapper>
        ))}
      </CookieContainer>
      <Wrapper>
        <Wrap sorted={settings.choosenSort}>
          {settings.choosenSort === "increase" ? (
            <PointerIncrease increase="/images/increase.png" />
          ) : (
            <PointerDecrease decrease="/images/decrease.png" />
          )}
        </Wrap>

        <PalleteContainer
          pallete={random.pallete}
          sorted={settings.choosenSort}
        >
          {itemsCountPallete.map((el, index) => (
            <Circle
              id={`dataId-${String(el)}`}
              key={index}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            ></Circle>
          ))}
        </PalleteContainer>
      </Wrapper>
      <Popup popup="/images/popup.png" className={endGame ? "visible" : ""}>
        <PopupButton onClick={onResetGame}>Заново</PopupButton>
      </Popup>
    </CookieGameBg>
  );
};

const Popup = styled.div<Popups>`
  background-image: url(${(props) => props.popup});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.3s, opacity 0.3s linear;
  &.visible {
    visibility: visible;
    opacity: 1;
  }
`;

const PopupButton = styled.div`
  width: 263px;
  height: 68px;
  color: #ffffff;
  background: #2bd600;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  font-family: "Circe Rounded Alt ";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 51px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 400px;
  &:hover {
    opacity: 0.8;
  }
`;

const CookiesImage = styled.div<CookiesImg>`
  display: grid;
  background-image: url(${(props) => props.cookiesImg});
  background-repeat: no-repeat;
  background-size: contain;
  width: 131px;
  height: 131px;
`;

const ItemWrapper = styled.div`
  &: nth-of-type(2n+1) {
    margin-top: 60px;
  }

  &: nth-of-type(1) {
    margin-right: 50px;
  }

  &: nth-of-type(3) {
    margin-top: 107px;
  }

  &: nth-of-type(5) {
    margin-left: 50px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrap = styled.div<SortedProps>`
  display: flex;
  width: 890px;
  margin: auto;
  justify-content: ${(props) =>
    props.sorted === "increase" ? "flex-start" : "flex-end"};
`;

const CookieGameBg = styled.div<ImageProps>`
  background-image: url(${(props) => props.coockieBg});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

const PointerIncrease = styled.div<PointerInc>`
  background-image: url(${(props) => props.increase});
  background-repeat: no-repeat;
  width: 360px;
  height: 70px;
`;

const PointerDecrease = styled.div<PointerDec>`
  background-image: url(${(props) => props.decrease});
  background-repeat: no-repeat;
  width: 360px;
  height: 70px;
`;

const CookieContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 83px 0 50px;
`;

const CookieItem = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  font-family: "Calibri";
  font-style: normal;
  font-weight: 400;
  font-size: 45px;
  line-height: 68px;
  letter-spacing: 2px;
  color: #ffffff;
  text-shadow: 5px 0 #242546, -2px 0 #242546, 0 2px #242546, 0 -2px #242546,
    1px 1px #242546, -1px -1px #242546, 1px -1px #242546, -1px 1px #242546;
`;

const PalleteContainer = styled.div<Pallete>`
  background-image: url(${(props) => props.pallete});
  justify-content: ${(props) =>
    props.sorted === "increase" ? "flex-start" : "flex-end"};
  display: flex;
  align-items: center;
  align-self: center;
  background-repeat: no-repeat;
  width: 890px;
  height: 222px;
  margin: 8px auto 30px;
  padding: 0 35px;
`;

const Circle = styled.div`
  width: 131px;
  height: 131px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.06);
  box-shadow: inset 0px 4px 25px rgba(0, 0, 0, 0.25);
  margin-right: 4px;
`;

export default CookieGame;
