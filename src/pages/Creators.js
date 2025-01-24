import { Box, Flex } from "@chakra-ui/react";
import  HeaderDashboard from "../components/Dash/HeaderDashboard";
import  CreatorTable  from "../components/Dash/CreatorTable";

export default function Creators() {
  return (
    <Box minH="100vh" bg="background">
      <HeaderDashboard />
      <Flex direction="column" p={4}>
        <CreatorTable />
      </Flex>
    </Box>
  );
}
