// // import { useState } from "react";
// // import {
// //   Table,
// //   Thead,
// //   Tbody,
// //   Tr,
// //   Th,
// //   Td,
// //   Checkbox,
// //   Button,
// //   useToast,
// // } from "@chakra-ui/react";

// // export default function CustomerList() {
// //   const [customers, setCustomers] = useState([
// //     {
// //       id: 1,
// //       name: "John Doe",
// //       age: 30,
// //       email: "john@example.com",
// //       city: "New York",
// //       purchase: 1500,
// //       selected: false,
// //     },
// //     {
// //       id: 2,
// //       name: "Jane Smith",
// //       age: 25,
// //       email: "jane@example.com",
// //       city: "Los Angeles",
// //       purchase: 2000,
// //       selected: false,
// //     },
// //   ]);

// //   const toast = useToast();

// //   const handleCheckboxChange = (customerId) => {
// //     setCustomers(
// //       customers.map((customer) =>
// //         customer.id === customerId
// //           ? { ...customer, selected: !customer.selected }
// //           : customer
// //       )
// //     );
// //   };

// //   const handleAddToSegment = () => {
// //     const selectedCustomers = customers.filter((c) => c.selected);
// //     if (selectedCustomers.length === 0) {
// //       toast({
// //         title: "No customer selected",
// //         description: "Please select at least one customer.",
// //         status: "error",
// //         duration: 3000,
// //         isClosable: true,
// //       });
// //       return;
// //     }
// //     toast({
// //       title: `Added ${selectedCustomers.length} customer(s) to segment`,
// //       status: "success",
// //       duration: 3000,
// //       isClosable: true,
// //     });
// //   };

// //   return (
// //     <div className="container py-10">
// //       <div className="rounded-md border">
// //         <Table variant="simple">
// //           <Thead>
// //             <Tr>
// //               <Th>Select</Th>
// //               <Th>ID</Th>
// //               <Th>Name</Th>
// //               <Th>Age</Th>
// //               <Th>Email</Th>
// //               <Th>City</Th>
// //               <Th>Purchase</Th>
// //             </Tr>
// //           </Thead>
// //           <Tbody>
// //             {customers.map((customer) => (
// //               <Tr key={customer.id}>
// //                 <Td>
// //                   <Checkbox
// //                     isChecked={customer.selected}
// //                     onChange={() => handleCheckboxChange(customer.id)}
// //                   />
// //                 </Td>
// //                 <Td>{customer.id}</Td>
// //                 <Td>{customer.name}</Td>
// //                 <Td>{customer.age}</Td>
// //                 <Td>{customer.email}</Td>
// //                 <Td>{customer.city}</Td>
// //                 <Td>${customer.purchase}</Td>
// //               </Tr>
// //             ))}
// //           </Tbody>
// //         </Table>
// //       </div>
// //       <div className="mt-4 flex justify-end">
// //         <Button colorScheme="blue" onClick={handleAddToSegment}>
// //           Add Selected to Segment
// //         </Button>
// //       </div>
// //     </div>
// //   );
// // }
// import { useState } from "react";
// import {
//   Box,
//   Table,
//   Thead,
//   Tbody,
//   Tr,
//   Th,
//   Td,
//   Checkbox,
//   Button,
//   useToast,
//   IconButton,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalCloseButton,
//   ModalBody,
//   ModalFooter,
//   useDisclosure,
//   AddIcon,
//   MinusIcon,
// } from "@chakra-ui/react";

// export default function CustomerList() {
//   const [customers, setCustomers] = useState([
//     {
//       id: 1,
//       name: "John Doe",
//       age: 30,
//       email: "john@example.com",
//       city: "New York",
//       purchase: 1500,
//       selected: false,
//     },
//     {
//       id: 2,
//       name: "Jane Smith",
//       age: 25,
//       email: "jane@example.com",
//       city: "Los Angeles",
//       purchase: 2000,
//       selected: false,
//     },
//     {
//       id: 3,
//       name: "Sam Wilson",
//       age: 35,
//       email: "sam@example.com",
//       city: "Chicago",
//       purchase: 2500,
//       selected: false,
//     },
//   ]);

//   const [segment, setSegment] = useState([]);
//   const [customersToAdd, setCustomersToAdd] = useState([]);
//   const toast = useToast();
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   // Handle the "Minus" button to remove customers from the segment
//   const handleRemoveFromSegment = (customerId) => {
//     setSegment(segment.filter((customer) => customer.id !== customerId));
//     toast({
//       title: "Customer removed",
//       description: "Customer has been removed from the segment.",
//       status: "success",
//       duration: 3000,
//       isClosable: true,
//     });
//   };

//   // Handle the "Add" button in the modal
//   const handleAddToSegment = () => {
//     const selectedCustomers = customersToAdd.filter((customer) => customer.selected);
//     if (selectedCustomers.length === 0) {
//       toast({
//         title: "No customer selected",
//         description: "Please select at least one customer.",
//         status: "error",
//         duration: 3000,
//         isClosable: true,
//       });
//       return;
//     }
//     setSegment([...segment, ...selectedCustomers]);
//     toast({
//       title: `Added ${selectedCustomers.length} customer(s) to segment`,
//       status: "success",
//       duration: 3000,
//       isClosable: true,
//     });
//     setCustomersToAdd([]); // Reset after adding
//     onClose(); // Close modal
//   };

//   // Handle checkbox change in the modal
//   const handleCheckboxChange = (customerId) => {
//     setCustomersToAdd(
//       customersToAdd.map((customer) =>
//         customer.id === customerId
//           ? { ...customer, selected: !customer.selected }
//           : customer
//       )
//     );
//   };

//   return (
//     <Box p={4} borderRadius="md" border="1px" borderColor="gray.200">
//       <Table variant="simple">
//         <Thead>
//           <Tr>
//             <Th>Actions</Th>
//             <Th>ID</Th>
//             <Th>Name</Th>
//             <Th>Age</Th>
//             <Th>Email</Th>
//             <Th>City</Th>
//             <Th>Purchase</Th>
//           </Tr>
//         </Thead>
//         <Tbody>
//           {segment.map((customer) => (
//             <Tr key={customer.id}>
//               <Td>
//                 <IconButton
//                   icon={<MinusIcon />}
//                   onClick={() => handleRemoveFromSegment(customer.id)}
//                   aria-label="Remove from segment"
//                   size="sm"
//                   colorScheme="red"
//                 />
//               </Td>
//               <Td>{customer.id}</Td>
//               <Td>{customer.name}</Td>
//               <Td>{customer.age}</Td>
//               <Td>{customer.email}</Td>
//               <Td>{customer.city}</Td>
//               <Td>${customer.purchase}</Td>
//             </Tr>
//           ))}
//         </Tbody>
//       </Table>

//       <IconButton
//         icon={<AddIcon />}
//         onClick={onOpen}
//         aria-label="Add customers"
//         size="lg"
//         colorScheme="teal"
//         position="fixed"
//         bottom="20px"
//         right="20px"
//       />

//       {/* Modal for selecting customers to add */}
//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Select Customers to Add</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <Table variant="simple">
//               <Thead>
//                 <Tr>
//                   <Th>Select</Th>
//                   <Th>ID</Th>
//                   <Th>Name</Th>
//                 </Tr>
//               </Thead>
//               <Tbody>
//                 {customers.map((customer) => (
//                   <Tr key={customer.id}>
//                     <Td>
//                       <Checkbox
//                         isChecked={customersToAdd.some(
//                           (cust) => cust.id === customer.id && cust.selected
//                         )}
//                         onChange={() => handleCheckboxChange(customer.id)}
//                       />
//                     </Td>
//                     <Td>{customer.id}</Td>
//                     <Td>{customer.name}</Td>
//                   </Tr>
//                 ))}
//               </Tbody>
//             </Table>
//           </ModalBody>
//           <ModalFooter>
//             <Button colorScheme="teal" onClick={handleAddToSegment}>
//               Add Selected
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </Box>
//   );
// }
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
  ModalCloseButton,
  Checkbox,
  useToast,
} from "@chakra-ui/react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";
// import { CustomerEditForm } from "./CustomerEditForm"; // Optional for customer editing.

function CustomerList() {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "John Doe",
      age: 30,
      email: "john@example.com",
      city: "New York",
      purchase: 1500,
      inSegment: true, // Flag to track if customer is in the segment.
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
    // Add other customers who are not in the segment.
  ]);

  const [selectedCustomers, setSelectedCustomers] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

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
        bottom="10px"
        right="10px"
      />

      {/* Modal for Adding Customers */}
      <Modal isOpen={isOpen} onClose={onClose}>
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
                </Tr>
              </Thead>
              <Tbody>
                {customers
                  .filter((customer) => !customer.inSegment) // Only show customers not in the segment
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
                    </Tr>
                  ))}
              </Tbody>
            </Table>
            <Button colorScheme="blue" onClick={handleAddCustomer} mt={4}>
              Add Selected Customers
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default CustomerList;
