import React, { useState } from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  IconButton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Checkbox,
  useToast,
  Textarea,
} from "@chakra-ui/react";
import { MinusIcon, AddIcon, DownloadIcon, BellIcon } from "@chakra-ui/icons";

function CustomerList() {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "John Doe",
      age: 30,
      email: "john@example.com",
      city: "New York",
      purchase: 1500,
      inSegment: true,
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 25,
      email: "jane@example.com",
      city: "Los Angeles",
      purchase: 2000,
      inSegment: true,
    },
    {
      id: 3,
      name: "Mike Johnson",
      age: 40,
      email: "mike@example.com",
      city: "Chicago",
      purchase: 1800,
      inSegment: false,
    },
  ]);

  const [selectedCustomers, setSelectedCustomers] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const notificationDisclosure = useDisclosure();
  const toast = useToast();
  const [notificationMessage, setNotificationMessage] = useState("");

  const handleDeleteCustomer = (id) => {
    setCustomers(
      customers.map((customer) =>
        customer.id === id ? { ...customer, inSegment: false } : customer
      )
    );
    toast({
      title: "Customer Removed",
      description: "Customer has been removed from the segment.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleAddCustomer = () => {
    const selected = customers.filter((customer) => selectedCustomers.includes(customer.id));
    if (selected.length > 0) {
      setCustomers(
        customers.map((customer) =>
          selected.some((s) => s.id === customer.id)
            ? { ...customer, inSegment: true }
            : customer
        )
      );
      toast({
        title: "Customers Added",
        description: "Selected customers have been added to the segment.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
    onClose();
  };

  const handleCheckboxChange = (customerId) => {
    setSelectedCustomers((prevSelected) =>
      prevSelected.includes(customerId)
        ? prevSelected.filter((id) => id !== customerId)
        : [...prevSelected, customerId]
    );
  };

  const handleDownload = () => {
    // Call API endpoint to download CSV
    fetch("/download-csv", { method: "GET" })
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = "customers.csv";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        toast({
          title: "Download Complete",
          description: "Customer list has been downloaded.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      });
  };

  const handleSendNotifications = () => {
    // Call API endpoint to send notifications
    const emails = customers
      .filter((customer) => customer.inSegment)
      .map((customer) => customer.email);
    fetch("/sendNotifications", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ emails, message: notificationMessage }),
    })
      .then((response) => {
        if (response.ok) {
          toast({
            title: "Notifications Sent",
            description: "Message has been sent to all customers.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        } else {
          toast({
            title: "Error",
            description: "Failed to send notifications.",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }
      });
    notificationDisclosure.onClose();
  };

  return (
    <Box p={4}>
      {/* Segment Table */}
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
          {customers
            .filter((customer) => customer.inSegment)
            .map((customer) => (
              <Tr key={customer.id}>
                <Td>{customer.id}</Td>
                <Td>{customer.name}</Td>
                <Td>{customer.age}</Td>
                <Td>{customer.email}</Td>
                <Td>{customer.city}</Td>
                <Td>${customer.purchase}</Td>
                <Td>
                  <IconButton
                    aria-label="Remove from segment"
                    icon={<MinusIcon />}
                    onClick={() => handleDeleteCustomer(customer.id)}
                    variant="outline"
                    colorScheme="red"
                    size="sm"
                  />
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>

      {/* Plus Icon Button */}
      <IconButton
        icon={<AddIcon />}
        aria-label="Add customers"
        colorScheme="teal"
        size="lg"
        onClick={onOpen}
        position="fixed"
        bottom="80px"
        right="10px"
      />

      {/* Download and Notification Icons */}
      <IconButton
        icon={<DownloadIcon />}
        aria-label="Download customers"
        colorScheme="blue"
        size="lg"
        onClick={handleDownload}
        position="fixed"
        bottom="10px"
        left="10px"
      />
      <IconButton
        icon={<BellIcon />}
        aria-label="Send notifications"
        colorScheme="purple"
        size="lg"
        onClick={notificationDisclosure.onOpen}
        position="fixed"
        bottom="80px"
        left="10px"
      />

      {/* Modal for Adding Customers */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Customers to Segment</ModalHeader>
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
                {customers
                  .filter((customer) => !customer.inSegment)
                  .map((customer) => (
                    <Tr key={customer.id}>
                      <Td>
                        <Checkbox
                          isChecked={selectedCustomers.includes(customer.id)}
                          onChange={() => handleCheckboxChange(customer.id)}
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
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={handleAddCustomer}>
              Add Selected Customers
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Notification Modal */}
      <Modal isOpen={notificationDisclosure.isOpen} onClose={notificationDisclosure.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Send Notification</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Textarea
              placeholder="Enter your message here"
              value={notificationMessage}
              onChange={(e) => setNotificationMessage(e.target.value)}
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={handleSendNotifications}>
              Send
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default CustomerList;
