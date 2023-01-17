import React from "react";
import { Container } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import FormEdit from "./FormEdit";

const Edit = ({ tasks, onUpdate }) => {
  const { id } = useParams();
  const task = tasks.find((t) => t.id === parseInt(id));
  return (
    <Container maxW="4xl" mt="20px">
      <FormEdit task={task} onUpdate={onUpdate} />
    </Container>
  );
};

export default Edit;
