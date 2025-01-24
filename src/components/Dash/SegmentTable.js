import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Box,
    Button,
    Flex,
    useDisclosure,
    Input,
    FormControl,
    FormLabel,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    useToast,
  } from "@chakra-ui/react";
  import { useState } from "react";
  import { Plus, Minus } from "lucide-react";
  import { useNavigate } from "react-router-dom"; // Import useNavigate
  import Customer from "../../pages/Customer";
  
  export default function SegmentTable() {
    const [segments, setSegments] = useState([
      { id: 1, name: "High Value", customerCount: 5 },
      { id: 2, name: "New Users", customerCount: 3 },
    ]);
  
    const { isOpen: isAddSegmentOpen, onOpen: onAddSegmentOpen, onClose: onAddSegmentClose } = useDisclosure();
    
    const [newSegmentName, setNewSegmentName] = useState("");
    const toast = useToast();
    
    const navigate = useNavigate(); // Initialize useNavigate for routing
  
    const handleAddSegment = () => {
      if (newSegmentName.trim()) {
        const maxId = segments.reduce((max, segment) => Math.max(max, segment.id), 0);
        const newSegment = {
          id: maxId + 1,
          name: newSegmentName.trim(),
          customerCount: 0,
        };
        setSegments([...segments, newSegment]);
        setNewSegmentName("");
        onAddSegmentClose();
        toast({
          title: "Segment added successfully.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Please enter a segment name.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    };
  
    const handleDeleteSegment = (id) => {
      setSegments(segments.filter((segment) => segment.id !== id));
      toast({
        title: "Segment deleted successfully.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    };
  
    const handleViewCustomers = (segmentId) => {
      navigate(`/customer/${segmentId}`); // Navigate to the Customer page with the segmentId
    };
  
    return (
      <Box className="container" py={10}>
        <Box border="1px solid" borderColor="gray.200" rounded="md" overflow="hidden">
          <Table variant="simple">
            <Thead bg="gray.100">
              <Tr>
                <Th>Segment ID</Th>
                <Th>Segment Name</Th>
                <Th>Number of Customers</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {segments.map((segment) => (
                <Tr key={segment.id}>
                  <Td>{segment.id}</Td>
                  <Td>{segment.name}</Td>
                  <Td>{segment.customerCount}</Td>
                  <Td>
                    <Flex gap={2}>
                      {/* View Customers Button */}
                      <Button size="sm" variant="outline" onClick={() => handleViewCustomers(segment.id)}>
                        View Customers
                      </Button>
  
                      {/* Delete Button */}
                      <Button
                        size="sm"
                        colorScheme="red"
                        onClick={() => handleDeleteSegment(segment.id)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                    </Flex>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
  
        {/* Add Segment Button */}
        <Flex justify="end" mt={4}>
          <Button leftIcon={<Plus />} colorScheme="teal" onClick={onAddSegmentOpen}>
            Add Segment
          </Button>
        </Flex>
  
        {/* Add Segment Modal */}
        <Modal isOpen={isAddSegmentOpen} onClose={onAddSegmentClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add New Segment</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                <FormLabel>Segment Name</FormLabel>
                <Input
                  value={newSegmentName}
                  onChange={(e) => setNewSegmentName(e.target.value)}
                  placeholder="Enter segment name"
                />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="teal" onClick={handleAddSegment}>
                Add Segment
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    );
  }
  