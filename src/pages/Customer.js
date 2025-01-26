import React, { useState } from "react";
import HeaderDashboard from "../components/Dash/HeaderDashboard";
import CustomerEditForm from "./CustomerEditForm";
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
  Checkbox,
  Stack,
} from "@chakra-ui/react";
import { EditIcon, AddIcon } from "@chakra-ui/icons";

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
  const [selectedCustomers, setSelectedCustomers] = useState([]);

  const handleEditClick = (customer) => {
    setSelectedCustomer(customer);
    onOpen();
  };

  const handleAddCustomer = () => {
    // Add selected customers to the main list
    setCustomers([...customers, ...selectedCustomers]);
    onClose(); // Close the modal after adding customers
  };

  const handleCheckboxChange = (customer, isChecked) => {
    if (isChecked) {
      setSelectedCustomers([...selectedCustomers, customer]);
    } else {
      setSelectedCustomers(
        selectedCustomers.filter((c) => c.id !== customer.id)
      );
    }
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
          <ModalContent maxWidth="100vw" width="90vw">
            <ModalHeader>Edit Customer</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {selectedCustomer && <CustomerEditForm customer={selectedCustomer} />}
            </ModalBody>
          </ModalContent>
        </Modal>

        {/* Floating Plus Button to Add New Customers */}
        <IconButton
          icon={<AddIcon />}
          aria-label="Add Customer"
          position="fixed"
          bottom="20px"
          right="20px"
          size="lg"
          colorScheme="teal"
          onClick={onOpen}
        />

        {/* Modal for Selecting Customers to Add */}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent maxWidth="100vw" width="90vw">
            <ModalHeader>Select Customers to Add</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Select</Th>
                    <Th>ID</Th>
                    <Th>Name</Th>
                    <Th>Email</Th>
                    <Th>City</Th>
                    <Th>Purchase</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {customers.map((customer) => (
                    <Tr key={customer.id}>
                      <Td>
                        <Checkbox
                          onChange={(e) =>
                            handleCheckboxChange(customer, e.target.checked)
                          }
                        />
                      </Td>
                      <Td>{customer.id}</Td>
                      <Td>{customer.name}</Td>
                      <Td>{customer.email}</Td>
                      <Td>{customer.city}</Td>
                      <Td>{customer.purchase}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
              <Button
                colorScheme="blue"
                mt={4}
                onClick={handleAddCustomer}
                isDisabled={selectedCustomers.length === 0}
              >
                Add Selected Customers
              </Button>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  );
}

export default Customer;
