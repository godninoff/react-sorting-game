import styled from "@emotion/styled";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setQuantity, setValue, setSorted } from "../store";
import { RootState } from "../store/store";
import { IMenuProps, ImageProps, BG_BUTTON } from "./types";

const StartMenu: React.FC<IMenuProps> = ({ onSubmitGame }) => {
  const dispatch = useDispatch();
  const settings = useSelector((state: RootState) => state.settings);

  return (
    <MainMenuBackground bgsettings="/images/bgsettings.png">
      <Module>
        <ContainerMenuSettings>
          <Title>Кол-во предметов</Title>
          <ValuesContainer>
            {settings.quantity.map((el: number) => (
              <RadioButton
                className={el == settings.choosenQuantity ? "choosen" : ""}
                key={el}
                onClick={() => dispatch(setQuantity(el))}
              >
                <span>{el}</span>
              </RadioButton>
            ))}
          </ValuesContainer>
          <Title>Значения</Title>
          <ValuesContainer>
            {settings.values.map((el: string) => (
              <RadioButton
                className={el == settings.choosenValue ? "choosen" : ""}
                key={el}
                onClick={() => dispatch(setValue(el))}
              >
                <span>{el}</span>
              </RadioButton>
            ))}
          </ValuesContainer>
          <SortedButton
            onClick={() => dispatch(setSorted(BG_BUTTON.INCREACE))}
            className={
              settings.choosenSort === BG_BUTTON.INCREACE ? "" : "opacity"
            }
          >
            По возрастанию
          </SortedButton>
          <SortedButton
            onClick={() => dispatch(setSorted(BG_BUTTON.DECREACE))}
            className={
              settings.choosenSort === BG_BUTTON.DECREACE ? "" : "opacity"
            }
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

const ValuesContainer = styled.div`
  background: #ffd748;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  padding: 0 5px;
  width: 366px;
  margin: 30px auto 0;

  &: nth-last-of-type(1) {
    width: 531px;
  }
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

const RadioButton = styled.button`
  background: transparent;
  position: relative;
  width: 23px;
  height: 23px;
  border-radius: 15px;
  outline: none;
  border: none;
  font-family: "Calibri";
  color: #4f4b61;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;

  &.choosen {
    background-color: #104987;
  }
  & span {
    position: absolute;
    top: -25px;
    left: -18px;
    width: 60px;
    text-align: center;
  }
`;

export default StartMenu;
