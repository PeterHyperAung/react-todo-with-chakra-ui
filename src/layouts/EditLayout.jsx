import React from "react";
import { Box, Container, Button, Flex, Text } from "@chakra-ui/react";
import { Outlet, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
const EditLayout = () => {
  const navigation = useNavigate();
  return (
    <Box>
      <Box>
        <Container maxW="4xl">
          <Flex justify="space-between" align="center" mt="20px">
            <Text fontSize="3xl">Edit</Text>
            <Button colorScheme="teal" onClick={() => navigation("/")}>
              <FiArrowLeft /> &nbsp; Back
            </Button>
          </Flex>
        </Container>
      </Box>
      <Outlet />
    </Box>
  );
};

export default EditLayout;
