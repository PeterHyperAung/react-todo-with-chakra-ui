import { Container, Box } from "@chakra-ui/react";
import React from "react";
import FormTask from "./FormTask";
import TaskList from "./TaskList";
import { Divider } from "@chakra-ui/react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Home = ({ onCreate, tasks, onDelete, onDone }) => {
  const [parent] = useAutoAnimate();
  return (
    <Container maxW="4xl" mt="20px">
      <FormTask onCreate={onCreate} />
      <Box ref={parent}>
        {tasks
          .filter((task) => !task.done)
          .map((task) => (
            <TaskList
              task={task}
              key={task.id}
              id={task.id}
              onDelete={onDelete}
              onDone={onDone}
            />
          ))}
        <Divider />
        {tasks
          .filter((task) => task.done)
          .map((task) => (
            <TaskList
              task={task}
              key={task.id}
              id={task.id}
              onDelete={onDelete}
              onDone={onDone}
            />
          ))}
      </Box>
    </Container>
  );
};

export default Home;
