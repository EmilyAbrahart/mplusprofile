import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { getCharacterData } from "../state/actions/characters";

const CharacterForm = ({ characters: { error }, getCharacterData }) => {
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
    setRegion("");
  };

  return (
    <Container>
      <FormContainer>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Character Name"
            onChange={handleNameChange}
            value={name}
          />
          <input
            type="text"
            name="server"
            placeholder="Server"
            onChange={handleServerChange}
            value={server}
          />

          <select name="region" onChange={handleRegionChange} defaultValue="">
            <option value="" disabled>
              Region
            </option>
            <option value="EU">EU</option>
            <option value="NA">NA</option>
          </select>
        </form>
        <button
          onClick={() => {
            handleSubmit();
          }}
        >
          ADD
        </button>
      </FormContainer>
      {error ? <div className="errorMessage">Character not found.</div> : null}
    </Container>
  );
};

export default connect((state) => state, { getCharacterData })(CharacterForm);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .errorMessage {
    color: #ff5851;
  }
`;
const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    input[type="text"] {
      margin: 0.5rem;
      padding: 0.5rem;
      width: 12rem;
      height: 2.2rem;
      box-sizing: border-box;
      border: none;
      background-color: white;
      font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI",
        "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;

      &:focus {
        outline: none;
        border: 1px solid #3bca8b;
        box-sizing: border-box;
      }
    }

    select {
      margin: 0.5rem;
      padding: 0.5rem;
      border: none;
      background-color: white;
      height: 2.2rem;
      width: 6rem;
      box-sizing: border-box;
      font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI",
        "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;
      text-align: center;

      &:focus {
        outline: none;
        border: 1px solid #3bca8b;
        box-sizing: border-box;
      }
    }
  }
  button {
    border: none;
    color: #2b2b2b;
    background-color: #3bca8b;
    width: 5rem;
    height: 2.2rem;
    padding: 0.6rem;
    font-weight: 700;
    margin: 0.5rem;
    outline: none;
    box-sizing: border-box;

    &:hover {
      cursor: pointer;
    }
  }
`;
