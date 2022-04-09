import styled from "styled-components/native";
import Colors from "../constants/Colors";

export const ListCard = styled.View<{ unavailable: boolean }>`
  padding: 20px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.22);
  opacity: ${(props) => (props.unavailable ? "0.4" : "1")};
`;

export const CardLink = styled.Pressable`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
`;

export const CardHeading = styled.Text`
  font-size: 14px;
  margin-bottom: 15px;
  color: var(--dark-blue);
  text-transform: capitalize;
  font-weight: 700;
  font-size: 18px;
`;

export const CardSpan = styled.Text`
  font-size: 14px;
  margin-bottom: 15px;
  text-transform: capitalize;
`;

/**
 * Não use esse componente. use uma flatList ou algum componente do react native para renderizar listas
 * use o arquivo optionsList como referencia
 */
export const ListOfCards = styled.View`
  padding: var(--padding);
  flex-grow: 1;
  width: 100%;
  list-style: none;
  margin: 0;
`;
const ratingColors = ["#bc2026", "#f58e1d", "#fecb08", "#7ebb43", "#0b9547"];
export const CardRating = styled.Text<{ ratingNumber: number }>`
  position: absolute;
  font-size: 40px;
  right: 30px;
  top: 0;
  font-weight: 700;
  color: ${(props) => ratingColors[props.ratingNumber]};
`;

export const CardAvailability = styled.Text<{ unavailable: boolean }>`
  position: absolute;
  position: absolute;
  font-size: 16px;
  right: 30px;
  bottom: 20px;
  font-weight: 700;
  color: ${(props) =>
    props.unavailable ? Colors.light["dark-gray"] : "#0b9547"};
  display: flex;
  align-items: center;
`;
