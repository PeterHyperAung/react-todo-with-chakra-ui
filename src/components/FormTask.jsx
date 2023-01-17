import { FormControl, FormLabel, Input, Button, Flex } from "@chakra-ui/react";
import { useState } from "react";

const FormTask = ({ onCreate }) => {
  const [value, setValue] = useState();
  return (
    <form onSubmit={() => onCreate()}>
      <FormControl>
        <FormLabel>Enter Your Task</FormLabel>
        <Flex>
          <Input
            type="text"
            borderTopRightRadius="0"
            borderBottomRightRadius="0"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button
            onClick={() => onCreate(value)}
            colorScheme="teal"
            variant="solid"
            borderTopLeftRadius="0"
            borderBottomLeftRadius="0"
          >
            Create
          </Button>
        </Flex>
      </FormControl>
    </form>
  );
};

export default FormTask;
