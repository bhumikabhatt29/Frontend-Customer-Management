import React, { useState } from "react";
import HeaderDashboard from "../components/Dash/HeaderDashboard";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  IconButton,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { CustomerEditForm } from "./CustomerEditForm";

function Customer() {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "John Doe",
      age: 30,
      email: "john@example.com",
      city: "New York",
      purchase: 1500,
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 25,
      email: "jane@example.com",
      city: "Los Angeles",
      purchase: 2000,
    },
  ]);

  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleEditClick = (customer) => {
    setSelectedCustomer(customer);
    onOpen();
  };

  return (
    <Box minH="100vh" bg="background">
      <HeaderDashboard />
    <Box border="1px solid" borderColor="gray.200" borderRadius="md" p={4}>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>Age</Th>
            <Th>Email</Th>
            <Th>City</Th>
            <Th>Purchase</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {customers.map((customer) => (
            <Tr key={customer.id}>
              <Td>{customer.id}</Td>
              <Td>{customer.name}</Td>
              <Td>{customer.age}</Td>
              <Td>{customer.email}</Td>
              <Td>{customer.city}</Td>
              <Td>${customer.purchase}</Td>
              <Td>
                <IconButton
                  aria-label="Edit customer"
                  icon={<EditIcon />}
                  size="sm"
                  variant="outline"
                  onClick={() => handleEditClick(customer)}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      {/* Modal for Editing Customer */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Customer</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedCustomer && <CustomerEditForm customer={selectedCustomer} />}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
    </Box>
  );
}

export default Customer;
