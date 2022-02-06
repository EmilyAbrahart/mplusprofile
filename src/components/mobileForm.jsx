import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { getCharacterData } from "../state/actions/characters";
import { flex, colors } from "../styles";
import { Form, Input, Select, MainButton } from "../styles/components";

const MobileForm = (props) => {
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
    props.getCharacterData(
      newCharacter.name,
      newCharacter.server,
      newCharacter.region
    );
    setName("");
    setServer("");
    // setRegion("");
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
          characterList={props.characterList}
          onClick={() => {
            handleSubmit();
          }}
        >
          ADD
        </MainButton>
      </FormContainer>
      {props.error ? (
        <div className="errorMessage">Character not found.</div>
      ) : null}
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
