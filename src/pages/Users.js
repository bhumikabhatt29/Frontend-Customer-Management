import { Box, Flex } from "@chakra-ui/react";
import  HeaderDashboard from "../components/Dash/HeaderDashboard";
import  UserTable from "../components/Dash/UserTable";

export default function Users() {
  return (
    <Box minH="100vh" bg="background">
      <HeaderDashboard />
      <Flex direction="column" p={4}>
        <UserTable />
      </Flex>
    </Box>
  );
}
