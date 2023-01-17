import { FormControl, FormLabel, Input, Button, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormEdit = ({ onUpdate, task }) => {
  const [value, setValue] = useState(task.task);
  const navigation = useNavigate();

  return (
    <form onSubmit={() => onUpdate()}>
      <FormControl>
        <FormLabel>Edit Your Task</FormLabel>
        <Flex>
          <Input
            type="text"
            borderTopRightRadius="0"
            borderBottomRightRadius="0"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button
            onClick={() => {
              onUpdate(value, task.id);
              navigation("/");
            }}
            colorScheme="teal"
            variant="solid"
            borderTopLeftRadius="0"
            borderBottomLeftRadius="0"
          >
            Edit
          </Button>
        </Flex>
      </FormControl>
    </form>
  );
};

export default FormEdit;
