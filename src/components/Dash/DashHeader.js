import { Button, Container, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import api from "../../api";
import { useToast } from "@chakra-ui/react";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import { Await } from "react-router-dom";

const DashHeader = ({setSegment,setCustomers,setGetSegmentBool}) => {
    const [getSegmentName,setGetSegmentName] = useState("");
    const [createSegment,setCreateSegment] = useState("");
    const toast = useToast();


    const handleGetSegment = async() => {
        const segName = getSegmentName;
        try{
            const config = {
                headers: {
                "Content-type": "application/json",
                },
            };
            const {data} = await api.get(`/seg/view_segment/${segName}`,{},
                config
            )
            const segmentDetails = data.segment;
            const customers = data.customers;

            if(segmentDetails){
                setSegment(data.segment);
                setCustomers((prevCustomers) => [
                    ...data.customers
                ])
            }
            toast({
                title: "view customers below",
                description: "",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
        }catch (error) {
            toast({
                title: "Error Occured!",
                description: error.response.data.message,
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
        }
    }

    const handleCreateSegment = async() => {
        const segName = createSegment;
        try{
            const config = {
                headers: {
                "Content-type": "application/json",
                },
            };
            const {data} = await api.post(`seg/create_segment`,{
                "segmentName": segName
            },
                config
            )

            toast({
                title: data,
                description: data,
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
        }catch (error) {
            toast({
                title: "Error Occured!",
                description: error.response.data.message,
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
        }
    }
    


  return (
    <VStack>
      <HStack>
        <FormControl w="30rem">
          <FormLabel>Segment Name</FormLabel>
          <Input 
          value={getSegmentName}
          type="text"
          placeholder="Enter segment name"
          onChange={(e) => setGetSegmentName(e.target.value)}
          />
        </FormControl>
        <Button paddingTop="5px" onClick={handleGetSegment}>Get Segment</Button>
      </HStack>
      <HStack>
        <FormControl w="30rem">
          <FormLabel>Segement Name</FormLabel>
          <Input 
          value={createSegment}
          type="text"
          placeholder="Enter segment name"
          onChange={(e) => setCreateSegment(e.target.value)}
          />
        </FormControl>
        <Button paddingTop="5px" onClick={handleCreateSegment}>Create Segment</Button>
      </HStack>
      <HStack>
        <FormControl w="30rem">
          <FormLabel>Email</FormLabel>
          <Input type="email" />
        </FormControl>
        <Button paddingTop="5px">Role Change</Button>
      </HStack>
      <Container>
        <HStack>
          <FormControl w="30rem">
            <FormLabel>Email</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl w="30rem">
            <FormLabel>Segment Name</FormLabel>
            <Input type="email" />
          </FormControl>
        </HStack>
        <Button paddingTop="5px">Add Customer to Segment</Button>
      </Container>
    </VStack>
  );
};

export default DashHeader;
