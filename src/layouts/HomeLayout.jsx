import React from "react";
import { Box, Container, Button, Flex, Text } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
const HomeLayout = ({ clearTasks }) => {
  return (
    <Box>
      <Box>
        <Container maxW="4xl" mt="20px">
          <Flex justify="space-between" align="center">
            <Text fontSize="3xl">Home</Text>
            <Button colorScheme="teal" onClick={clearTasks}>
              Clear
            </Button>
          </Flex>
        </Container>
      </Box>
      <Outlet />
    </Box>
  );
};

export default HomeLayout;
