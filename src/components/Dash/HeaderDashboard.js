import React from "react";
import {
  Box,
  Flex,
  Heading,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function HeaderDashboard() {
  const navigate = useNavigate();

  return (
    <Box
      as="header"
      borderBottom="1px solid"
      borderColor={useColorModeValue("gray.200", "gray.700")}
    >
      <Flex
        className="container"
        h="16"
        alignItems="center"
        justifyContent="space-between"
        px={4}
      >
        {/* Logo Section */}
        <Heading
          as="h1"
          size="lg"
          fontWeight="bold"
          cursor="pointer"
          onClick={() => navigate("/")}
        >
          UserPro
        </Heading>

        {/* Navigation Section */}
        <Flex alignItems="center" gap={4}>
          <Button variant="ghost" onClick={() => navigate("/users")}>
            Users
          </Button>
          <Button variant="ghost" onClick={() => navigate("/customer")}>
            Customers
          </Button>

          {/* Account Dropdown */}
          <Menu>
            <MenuButton as={Button} variant="ghost">
              My Account
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => navigate("/profile")}>
                My Profile
              </MenuItem>
              <MenuItem onClick={() => navigate("/")}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
}

export default HeaderDashboard;
