import styled from "@emotion/styled";
import * as horses from "../horses.json";
import { useContext } from "react";
import { ThemeContext, ToggleThemeContext } from "../App";

export default function DropDown() {
  const theme = useContext(ThemeContext);
  const toggleTheme = useContext(ToggleThemeContext);

  const Container = styled.form`
    background: ${theme.background};
    color: ${theme.color};
  `;
  const Label = styled.label``;

  const Select = styled.select`
    appearance: none;
  `;

  const mappedHorses = Object.keys(horses).map((element: any, value: any) => {
    return (
      <option key={element} value={horses[element].name}>
        {horses[element].name}
      </option>
    );
  });
  return (
    <Container>
      <Label htmlFor="horse">Select a Horse: </Label>
      <Select name="horse">{mappedHorses}</Select>
      <button onClick={toggleTheme}>here</button>
    </Container>
  );
}
