import { Box, Container, TabPanels, Tabs,Tab, TabList,TabPanel } from "@chakra-ui/react";
import React from "react";
import Signup from "../components/Auth/Signup";
import Login from "../components/Auth/Login";

const HomePage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box bg="white" w="100%" p={4}>
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab>Sign Up</Tab>
            <Tab>Login</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Signup/>
            </TabPanel>
            <TabPanel>
              <Login/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
