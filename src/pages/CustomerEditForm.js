import { Button, Input, FormControl, FormLabel, Box } from "@chakra-ui/react";
import { useState } from "react";

export default function CustomerEditForm({ customer }) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    city: "",
    purchase: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data: ", formData);
  };

  return (
    <Box
      p={6}
      bg="white"
      borderRadius="md"
      boxShadow="lg"
      maxWidth="500px"
      mx="auto"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl id="age" isRequired>
          <FormLabel>Age</FormLabel>
          <Input
            name="age"
            type="number"
            value={formData.age}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl id="city" isRequired>
          <FormLabel>City</FormLabel>
          <Input
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl id="purchase" isRequired mb={6}>
          <FormLabel>Purchase Amount</FormLabel>
          <Input
            name="purchase"
            type="number"
            value={formData.purchase}
            onChange={handleChange}
          />
        </FormControl>

        <Button type="submit" width="full" colorScheme="blue">
          Save Changes
        </Button>
      </form>
    </Box>
  );
}
