import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { FiTrash2, FiCheck, FiEdit2, FiRotateCcw } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const TaskList = ({ task, onEdit, onDelete, onDone, id }) => {
  const navigate = useNavigate();

  return (
    <Box bg="teal.600" borderRadius="5px" my="10px" p="14px">
      <Flex justify="space-between" align="center">
        <Flex align="center" gap="10px">
          {task.done ? (
            <FiRotateCcw
              onClick={() => onDone(id)}
              size="18px"
              style={{ cursor: "pointer" }}
            />
          ) : (
            <FiCheck
              onClick={() => onDone(id)}
              size="18px"
              style={{ cursor: "pointer" }}
            />
          )}
          <Text fontSize="lg">{task.task}</Text>
        </Flex>
        <Flex align="center" gap="10px">
          <FiEdit2
            onClick={() => {
              navigate(`/edit/${id}`);
            }}
            size="18px"
            style={{ cursor: "pointer" }}
          />
          <FiTrash2
            onClick={() => onDelete(id)}
            size="18px"
            style={{ cursor: "pointer" }}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default TaskList;
