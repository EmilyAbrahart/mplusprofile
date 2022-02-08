import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { getCharacterData } from "../state/actions/characters";
import { flex, colors } from "../styles";
import { Form, Input, Select, MainButton } from "../styles/components";

const CharacterForm = ({
  characters: { characterList, error },
  getCharacterData,
}) => {
  const [name, setName] = useState("");
  const [server, setServer] = useState("");
  const [region, setRegion] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleServerChange = (event) => {
    setServer(event.target.value);
  };
  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };
  const handleSubmit = () => {
    const newCharacter = {
      name,
      server,
      region,
    };
    getCharacterData(
      newCharacter.name,
      newCharacter.server,
      newCharacter.region
    );
    setName("");
    setServer("");
    // setRegion("");
  };

  return (
    <Container>
      <FormContainer className="form-container">
        <Form>
          <Input
            type="text"
            name="name"
            placeholder="Character Name"
            onChange={handleNameChange}
            value={name}
          />
          <Input
            type="text"
            name="server"
            placeholder="Server"
            onChange={handleServerChange}
            value={server}
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
            <option value="NA">NA</option>
          </Select>
        </Form>
        <MainButton
          characterList={characterList}
          onClick={() => {
            handleSubmit();
          }}
        >
          ADD
        </MainButton>
      </FormContainer>
      {error ? (
        <ErrorContainer className="errorMessage" characterList={characterList}>
          Character not found.
        </ErrorContainer>
      ) : null}
    </Container>
  );
};

export default connect((state) => state, { getCharacterData })(CharacterForm);

const Container = styled.div`
  ${flex("column", "flex-start", "center")}
  width: 90%;
  border-radius: 1rem;
`;

const ErrorContainer = styled.div`
  color: ${colors.main.warning};
  @media (max-width: 1035px) {
    display: ${(props) => (props.characterList.length > 0 ? "none" : "flex")};
  }
`;
const FormContainer = styled.div`
  ${flex("column", "center", "center")};
  width: 100%;

  form {
    width: 100%;
  }

  input {
    width: 70%;
  }

  select {
    width: 70%;
  }
`;
