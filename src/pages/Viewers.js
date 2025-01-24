import { Box, Flex } from "@chakra-ui/react";
import  HeaderDashboard  from "../components/Dash/HeaderDashboard";
import  ViewerTable  from "../components/Dash/ViewerTable";

export default function Viewers() {
  return (
    <Box minH="100vh" bg="background">
      <HeaderDashboard />
      <Flex direction="column" p={4}>
        <ViewerTable />
      </Flex>
    </Box>
  );
}
