import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import EditLayout from "./layouts/EditLayout";
import Home from "./components/Home";
import Edit from "./components/Edit";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: Math.round(Math.random() * 9999), task: "abc", done: false },
    { id: Math.round(Math.random() * 9999), task: "ghi", done: true },
    { id: Math.round(Math.random() * 9999), task: "def", done: false },
  ]);

  const createTask = (task) => {
    if (!task) return;
    setTasks([
      ...tasks,
      { id: Math.round(Math.random() * 9999), task, done: false },
    ]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const clearTasks = () => {
    setTasks(tasks.filter((task) => !task.done));
  };

  const toggleDone = (id) => {
    const result = tasks.map((task) => {
      if (task.id === id) task.done = !task.done;
      return task;
    });
    setTasks(result);
  };

  const updateTask = (newTask, id) => {
    const result = tasks.map((task) => {
      if (task.id === id) task.task = newTask;
      return task;
    });
    setTasks(result);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<HomeLayout clearTasks={clearTasks} />}>
          <Route
            index
            element={
              <Home
                tasks={tasks}
                onCreate={createTask}
                onDelete={deleteTask}
                onDone={toggleDone}
              />
            }
          />
        </Route>
        <Route path="/edit/:id" element={<EditLayout />}>
          <Route index element={<Edit tasks={tasks} onUpdate={updateTask} />} />
        </Route>
      </Route>
    )
  );

  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
};

export default App;
