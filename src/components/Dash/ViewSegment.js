import { Container } from "@chakra-ui/react";
import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const ViewSegment = ({customers}) => {
    console.log(customers);


  return (
    <Container >
      <TableContainer maxW="50rem">
        <Table variant="striped" size="lg" maxW="20rem">
          {(customers.length === 0) && <TableCaption>No Customers are Added to the Segment</TableCaption>}
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th isNumeric>Age</Th>
              <Th>Email</Th>
              <Th>City</Th>
              <Th>Purchase</Th>
            </Tr>
          </Thead>
          <Tbody>
            {customers.map(customer => (
                <Tr key={customer.id}>
                    <Td>{customer.name}</Td>
                    <Td>{customer.age}</Td>
                    <Td>{customer.email}</Td>
                    <Td>{customer.city}</Td>
                    <Td>{customer.purchase}</Td>
                </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ViewSegment;
