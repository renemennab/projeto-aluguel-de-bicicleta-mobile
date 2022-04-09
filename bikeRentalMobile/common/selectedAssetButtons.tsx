import React, { useState } from "react";
import styled from "styled-components/native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Colors from "../constants/Colors";
import { defaultPadding } from "../constants/Layout";
import ConfirmationDialog from "./confirmationDialog";
import { RootStackParamList } from "../types";

interface IProps {
  onDelete: () => void;
}

function SelectedAssetButtons({ onDelete }: IProps): JSX.Element {
  const route =
    useRoute<
      NativeStackScreenProps<RootStackParamList, "bikes" | "users">["route"]
    >();
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation();

  function handleDelete(): void {
    onDelete();
    setShowModal(false);
  }

  return (
    <StyledSelectedAssetButtons>
      <EditPressable
        onPress={() =>
          navigation.navigate(route.name, {
            edit: true,
            // não sei se isso aqui vai funcionar. se quebrar quando estiver tentando usar, tente procurar uma forma de pegar o id do usuário/bike selecionado.
            id: navigation.getParam("id"),
          })
        }
        aria-label="editar"
      >
        <i className="far fa-edit" />
      </EditPressable>
      <RemovePressable onPress={() => setShowModal(true)} aria-label="deletar">
        <i className="far fa-trash-alt" />
      </RemovePressable>
      {showModal ? (
        <ConfirmationDialog
          onCancel={() => setShowModal(false)}
          onDelete={() => handleDelete()}
        />
      ) : null}
    </StyledSelectedAssetButtons>
  );
}

export default SelectedAssetButtons;

const StyledSelectedAssetButtons = styled.View`
  width: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  top: ${defaultPadding};
  right: ${defaultPadding};
`;

const EditPressable = styled.Pressable`
  padding: 15px;
  background: transparent;
  color: ${Colors.light["dark-blue"]};
  border: none;
  font-size: 18px;
  transform: translate(10px, -25%);
`;

const RemovePressable = styled(EditPressable)`
  color: ${Colors.light.red};
`;
