import styled from "@emotion/styled";
import React from "react";

type ImageProps = {
  bgsettings: string;
};

interface IMenuProps {
  title: string;
  onSubmitGame: () => void;
  setSettings: (options: IDefaultState) => void;
}

export type IDefaultState = {
  quantity: number;
  values: string;
  sorted: string;
};

const MainMenuBackground = styled.div<ImageProps>`
  background-image: url(${(props) => props.bgsettings});
  display: flex;
  width: 100%;
  width: 980px;
  height: 100%;
  margin: auto;
`;

const Module = styled.div`
  display: flex;
  text-align: center;
  position: relative;
  width: 699px;
  height: 100vh;
  background: #ffffff;
  border-radius: 40px;
  margin: auto;
  padding: 1rem;
  background: linear-gradient(to bottom, #7f75f0, #101f32);
`;

const ContainerMenuSettings = styled.div`
  background: white;
  width: 100%;
  border-radius: 40px;
`;

const Title = styled.h2`
  font-family: "Helvetica", sans-serif;
  color: #423f45;
  font-weight: 400;
  font-size: 32px;
  line-height: 44px;
  padding-top: 57px;
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
  margin-top: 20px;
  margin-left: 10px;
  font-family: "Calibri";
  font-weight: 700;
  font-size: 32px;
  color: #423f45;
  cursor: pointer;
`;

const GameButton = styled.button`
  width: 260px;
  background: #38df7a;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  border: none;
  font-family: "Helvetica";
  font-weight: 400;
  font-size: 32px;
  margin-top: 10px;
  cursor: pointer;
`;

const RadioButton = styled.input`
  &::after {
    width: 23px;
    height: 23px;
    border-radius: 15px;
    top: -4px;
    left: -7px;
    position: relative;
    background-color: #d1d3d1;
    content: "";
    display: inline-block;
    visibility: visible;
  }
  &:checked:after {
    width: 23px;
    height: 23px;
    border-radius: 15px;
    top: -4px;
    left: -7px;
    position: relative;
    background-color: #104987;
    content: "";
    display: inline-block;
    visibility: visible;
  }
`;

const Settings: React.FC<IMenuProps> = ({ onSubmitGame, setSettings }) => {
  const defaultState: IDefaultState = {
    quantity: 2,
    values: "A",
    sorted: "increase",
  };
  const [items, setItems] = React.useState([2, 3, 4, 5]);
  const [values, setValues] = React.useState(["A", 9, 19, 50, 99, 999]);

  const [options, setOptions] = React.useState(defaultState);

  const onSort = (value: string) =>
    setOptions((prev) => ({ ...prev, sorted: value }));

  const onSortCondition = (e: React.MouseEvent) => {
    const target = e.target as HTMLInputElement;
    const inter = target.value;

    onSort(inter);
  };

  React.useEffect(() => {
    setSettings(options);
  }, [options]);

  return (
    <MainMenuBackground bgsettings="/images/bgsettings.png">
      <Module>
        <ContainerMenuSettings>
          <Title>Кол-во предметов</Title>
          <SettingsContainer>
            <ValuesContainer>
              {items.map((index) => (
                <Values key={index}>{index}</Values>
              ))}
            </ValuesContainer>

            <InputValues>
              {items.map((index) => (
                <RadioButton
                  key={index}
                  type="radio"
                  name="radio"
                  value={index}
                  onChange={(e) =>
                    setOptions((prev) => ({
                      ...prev,
                      quantity: Number(e.target.value),
                    }))
                  }
                />
              ))}
            </InputValues>
          </SettingsContainer>
          <Title>Значения</Title>
          <SettingsContainer>
            <ValuesContainer>
              {values.map((index) => (
                <Values key={index}>{index}</Values>
              ))}
            </ValuesContainer>
            <InputValues>
              {values.map((index) => (
                <RadioButton
                  key={index}
                  type="radio"
                  name="radio"
                  value={index}
                  onChange={(e) =>
                    setOptions((prev) => ({
                      ...prev,
                      values: String(e.target.value),
                    }))
                  }
                />
              ))}
            </InputValues>
          </SettingsContainer>
          <SortedButton value="increase" onClick={(e) => onSortCondition(e)}>
            По возрастанию
          </SortedButton>
          <SortedButton value="decrease" onClick={(e) => onSortCondition(e)}>
            По убыванию
          </SortedButton>
          <GameButton onClick={() => onSubmitGame()}>Играть</GameButton>
        </ContainerMenuSettings>
      </Module>
    </MainMenuBackground>
  );
};

export default Settings;
