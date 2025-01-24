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

export default function ViewerTable() {
  const [viewers, setViewers] = useState([
    { id: 1, name: "John Viewer", email: "john@viewer.com", role: "viewer" },
    { id: 2, name: "Jane Viewer", email: "jane@viewer.com", role: "viewer" },
  ]);

  const toast = useToast();

  const handleRoleChange = (id, newRole) => {
    setViewers(viewers.map((viewer) =>
      viewer.id === id ? { ...viewer, role: newRole } : viewer
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
            {viewers.map((viewer) => (
              <Tr key={viewer.id}>
                <Td>{viewer.id}</Td>
                <Td>{viewer.name}</Td>
                <Td>{viewer.email}</Td>
                <Td>
                  <Menu>
                    <MenuButton as={Button} variant="outline" size="sm">
                      Change Role
                    </MenuButton>
                    <MenuList>
                      <MenuItem onClick={() => handleRoleChange(viewer.id, "admin")}>
                        Admin
                      </MenuItem>
                      <MenuItem onClick={() => handleRoleChange(viewer.id, "creator")}>
                        Creator
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
