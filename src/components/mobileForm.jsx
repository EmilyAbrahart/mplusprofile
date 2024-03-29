import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { getCharacterData } from "../state/actions/characters";
import { slugged } from "../utlities/slugged";
import { trimmed } from "../utlities/trimmed";
import { flex, colors } from "../styles";
import { Form, Input, Select, MainButton } from "../styles/components";

const MobileForm = (props) => {
  const [nameInput, setNameInput] = useState("");
  const [serverInput, setServerInput] = useState("");
  const [region, setRegion] = useState("");

  const handleNameChange = (event) => {
    setNameInput(event.target.value);
  };
  const handleServerChange = (event) => {
    setServerInput(event.target.value);
  };
  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };
  const handleSubmit = () => {
    const name = trimmed(nameInput);
    const server = slugged(trimmed(serverInput));
    const newCharacter = {
      name,
      server,
      region,
    };
    if (
      !props.characterList.some(
        (character) =>
          (character.name + character.server).toLowerCase() ===
          (newCharacter.name + newCharacter.server).toLowerCase()
      )
    ) {
      props.getCharacterData(
        newCharacter.name,
        newCharacter.server,
        newCharacter.region
      );
    }
    setNameInput("");
    setServerInput("");
  };

  return (
    <Container showForm={props.showMobileForm}>
      <FormContainer className="mobile-form-container">
        <Form>
          <Input
            type="text"
            name="name"
            placeholder="Character Name"
            onChange={handleNameChange}
            value={nameInput}
          />
          <Input
            type="text"
            name="server"
            placeholder="Server"
            onChange={handleServerChange}
            value={serverInput}
          />

          <Select
            name="region"
            onChange={handleRegionChange}
            defaultValue="REGION"
          >
            <option value="REGION" disabled>
              Region
            </option>
            <option value="EU">EU</option>
            <option value="US">US</option>
          </Select>
        </Form>
        <MainButton
          characterList={props.characterList}
          onClick={() => {
            handleSubmit();
          }}
        >
          ADD
        </MainButton>
      </FormContainer>
      {/* {props.error ? (
        <div className="errorMessage">Character not found.</div>
      ) : null} */}
    </Container>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    characterList: state.characters.characterList,
    error: state.characters.error,
    showMobileForm: ownProps.showMobileForm,
  };
};

export default connect(mapStateToProps, { getCharacterData })(MobileForm);

const Container = styled.div`
  position: absolute;
  right: 1rem;
  top: 3.5rem;
  ${flex("column", "flex-start", "center")}
  display: ${(props) => (props.showForm ? "flex" : "none")};
  width: 20rem;
  border-radius: 1rem;
  background-color: ${colors.main.primary.dark};
  border: 1px solid ${colors.main.secondary};
  padding: 1rem 0;
  z-index: 1000;

  .errorMessage {
    color: ${colors.main.warning};
  }
`;
const FormContainer = styled.div`
  ${flex("column", "center", "center")};
  width: 100%;

  form {
    width: 100%;
  }

  input {
    width: 80%;
  }

  select {
    width: 80%;
  }

  @media (max-width: 530px) {
    input,
    select {
      width: 80%;
    }
  }
`;
