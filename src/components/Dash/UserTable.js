import { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useToast,
} from "@chakra-ui/react";

export default function UserTable() {
  const [creators, setCreators] = useState([
    { id: 1, name: "John Creator", email: "john@creator.com",role:"Admin"},
    { id: 2, name: "Jane Creator", email: "jane@creator.com", role:"Creator"},
  ]);

  const toast = useToast();
  const handleRoleChange = (id, newRole) => {
    setCreators(creators.map((creator) =>
      creator.id === id ? { ...creator, role: newRole } : creator
    ));
    toast({
      title: `Role updated successfully to ${newRole}`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <div className="container py-10">
      <div className="rounded-md border">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Role</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {creators.map((creator) => (
              <Tr key={creator.id}>
                <Td>{creator.id}</Td>
                <Td>{creator.name}</Td>
                <Td>{creator.email}</Td>
                <Td>{creator.role}</Td>
                <Td>
                  <Menu>
                    <MenuButton as={Button} variant="outline" size="sm">
                      Change Role
                    </MenuButton>
                    <MenuList>
                      <MenuItem onClick={() => handleRoleChange(creator.id, "admin")}>
                        Admin
                      </MenuItem>
                      <MenuItem onClick={() => handleRoleChange(creator.id, "viewer")}>
                        Viewer
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </div>
    </div>
  );
}
