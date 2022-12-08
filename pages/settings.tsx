import styled from "@emotion/styled";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setQuantity, setValue, setSorted } from "../store/";
import { store } from "../store/store";

type ImageProps = {
  bgsettings: string;
};

type IMenuProps = {
  onSubmitGame: () => void;
};

enum BG_BUTTON {
  INCREACE = "increase",
  DECREACE = "decrease",
}

const Settings: React.FC<IMenuProps> = ({ onSubmitGame }) => {
  const [sortedButton, setSortedButton] = React.useState<
    BG_BUTTON.INCREACE | BG_BUTTON.DECREACE
  >(BG_BUTTON.INCREACE);
  const dispatch = useDispatch();
  const { settings } = store.getState();

  return (
    <MainMenuBackground bgsettings="/images/bgsettings.png">
      <Module>
        <ContainerMenuSettings>
          <Title>Кол-во предметов</Title>
          <SettingsContainer>
            <ValuesContainer>
              {settings.quantity.map((el: number) => (
                <Values key={el}>{el}</Values>
              ))}
            </ValuesContainer>

            <InputValues>
              {settings.quantity.map((el: number) => (
                <RadioButton
                  key={el}
                  type="range"
                  step={1}
                  value={el}
                  onChange={(e) => dispatch(setQuantity(el))}
                />
              ))}
            </InputValues>
          </SettingsContainer>
          <Title>Значения</Title>
          <SettingsContainer>
            <ValuesContainer>
              {settings.values.map((el: string) => (
                <Values key={el}>{el}</Values>
              ))}
            </ValuesContainer>
            <InputValues>
              {settings.values.map((el: string) => (
                <RadioButton
                  key={el}
                  type="range"
                  step={1}
                  value={el}
                  onChange={(e) => dispatch(setValue(el))}
                />
              ))}
            </InputValues>
          </SettingsContainer>
          <SortedButton
            value={sortedButton}
            onClick={(e) => dispatch(setSorted(BG_BUTTON.INCREACE))}
          >
            По возрастанию
          </SortedButton>
          <SortedButton
            value={sortedButton}
            onClick={(e) => dispatch(setSorted(BG_BUTTON.DECREACE))}
          >
            По убыванию
          </SortedButton>
          <GameButton onClick={() => onSubmitGame()}>Играть</GameButton>
        </ContainerMenuSettings>
      </Module>
    </MainMenuBackground>
  );
};

const MainMenuBackground = styled.div<ImageProps>`
  background-image: url(${(props) => props.bgsettings});
  background-size: cover;
  height: 100vh;
  display: flex;
`;

const Module = styled.div`
  display: flex;
  text-align: center;
  position: relative;
  width: 699px;
  background: #ffffff;
  border-radius: 40px;
  margin: auto;
  padding: 1rem;
  background: linear-gradient(to bottom, #7f75f0, #101f32);
`;

const ContainerMenuSettings = styled.div`
  background: white;
  border-radius: 40px;
`;

const Title = styled.h2`
  font-family: "Helvetica", sans-serif;
  color: #423f45;
  font-weight: 600;
  font-size: 32px;
  line-height: 44px;
  padding-top: 30px;
  padding-bottom: 16px;
  margin: 0;
`;

const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 366px;
  margin: auto;

  &: nth-last-of-type(1) {
    width: 531px;
  }
`;

const ValuesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 5px;
`;

const Values = styled.div`
  font-family: "Calibri";
  color: #4f4b61;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
`;

const InputValues = styled.div`
  display: flex;
  justify-content: space-between;

  background: #ffd748;
  border-radius: 10px;
  width: 100%;
  height: 21px;
`;

const SortedButton = styled.button`
  width: 271px;
  background: #ffd748;
  border-radius: 20px;
  border: none;
  margin-top: 70px;
  margin-left: 10px;
  font-family: "Calibri";
  font-weight: 700;
  font-size: 32px;
  color: #423f45;
  cursor: pointer;
`;

const GameButton = styled.button`
  background: #38df7a;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  border: none;
  font-family: "Helvetica";
  font-weight: 400;
  font-size: 32px;
  color: #ffffff;
  padding: 4px 73px 12px 77px;
  margin: 90px 0 30px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const RadioButton = styled.input`
  -webkit-appearance: none;
  // &::after {
  //   width: 23px;
  //   height: 23px;
  //   border-radius: 15px;
  //   top: -4px;
  //   left: -7px;
  //   position: relative;
  //   background-color: #d1d3d1;
  //   content: "";
  //   display: inline-block;
  //   visibility: visible;
  // }
  // &:checked:after {
  //   width: 23px;
  //   height: 23px;
  //   border-radius: 15px;
  //   top: -4px;
  //   left: -7px;
  //   position: relative;
  //   background-color: #104987;
  //   content: "";
  //   display: inline-block;
  //   visibility: visible;
  // }
`;

export default Settings;
