import styled from "@emotion/styled";
import React from "react";
import { Settings } from "../store";
import { store } from "../store/store";
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

const CookieGame: React.FC<Settings> = () => {
  const { settings } = store.getState();

  const [itemsCount, setItemsCount] = React.useState<number[]>([]);
  const [random, setRandom] = React.useState(arrayRandElement(gameTheme));

  React.useEffect(() => {
    const res = getRange() as number[];
    setItemsCount(res);
  }, []);

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

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const itemId = e.dataTransfer.getData("dataId");
    const getItemId = document.getElementById(itemId) as HTMLDivElement;
    const target = e.target as HTMLDivElement;
    target.appendChild(getItemId);
  };

  const drag = (
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
              id={`dataId-${String(index)}`}
              key={index}
              cookiesImg={arrayRandElement(random.items)}
              draggable={true}
              onDragStart={drag}
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
          {Array.from(Array(settings.choosenQuantity)).map((_x, index) => (
            <Circle
              key={index}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            />
          ))}
        </PalleteContainer>
      </Wrapper>
    </CookieGameBg>
  );
};

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
