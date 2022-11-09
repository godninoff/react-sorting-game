import styled from "@emotion/styled";
import { IDefaultState } from "./settings";

const CookieGameBg = styled.div<ImageProps>`
  background-image: url(${(props) => props.coockieBg});
  display: grid;
  width: 980px;
  height: 810px;
`;

const CookieContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CookieItem = styled.div`
  width: 157px;
  height: 158px;
  font-family: "Calibri";
  font-style: normal;
  font-weight: 400;
  font-size: 56px;
  line-height: 68px;
  display: flex;
  align-items: center;
  letter-spacing: 2px;

  color: #ffffff;

  text-shadow: 5px 0 #242546, -2px 0 #242546, 0 2px #242546, 0 -2px #242546,
    1px 1px #242546, -1px -1px #242546, 1px -1px #242546, -1px 1px #242546;
`;

const PalleteContainer = styled.div<Pallete>`
  background-image: url(${(props) => props.pallete});
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  height: 222px;
`;

const Circle = styled.div`
  width: 131px;
  height: 131px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.06);
  box-shadow: inset 0px 4px 25px rgba(0, 0, 0, 0.25);
  margin-right: 4px;
`;

type ImageProps = {
  coockieBg: string;
};

type Pallete = {
  pallete: string;
};

type CookieGameProps = {
  settings: IDefaultState;
};

const CookieGame: React.FC<CookieGameProps> = ({ settings }) => {
  return (
    <CookieGameBg coockieBg="/images/coockiebg.png">
      <CookieContainer>
        <CookieItem draggable={true}>119</CookieItem>
        <CookieItem draggable={true}>118</CookieItem>
        <CookieItem draggable={true}>48</CookieItem>
        <CookieItem draggable={true}>52</CookieItem>
      </CookieContainer>

      <PalleteContainer pallete="/images/pallet.png">
        {Array.from(Array(settings.quantity)).map((x) => (
          <Circle key={x}></Circle>
        ))}
      </PalleteContainer>
    </CookieGameBg>
  );
};

export default CookieGame;
