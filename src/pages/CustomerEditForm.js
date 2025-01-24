import { Button, Input, FormControl, FormLabel } from "@chakra-ui/react";
import { useState } from "react";

export function CustomerEditForm({ customer }) {
  const [formData, setFormData] = useState({
    name: customer.name,
    age: customer.age,
    email: customer.email,
    city: customer.city,
    purchase: customer.purchase,
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
    // Handle form submission (e.g., send updated data to the server)
    console.log("Form submitted with data: ", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormControl id="name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter customer's name"
        />
      </FormControl>

      <FormControl id="age" isRequired>
        <FormLabel>Age</FormLabel>
        <Input
          name="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
          placeholder="Enter customer's age"
        />
      </FormControl>

      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter customer's email"
        />
      </FormControl>

      <FormControl id="city" isRequired>
        <FormLabel>City</FormLabel>
        <Input
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="Enter customer's city"
        />
      </FormControl>

      <FormControl id="purchase" isRequired>
        <FormLabel>Purchase Amount</FormLabel>
        <Input
          name="purchase"
          type="number"
          value={formData.purchase}
          onChange={handleChange}
          placeholder="Enter customer's purchase amount"
        />
      </FormControl>

      <Button type="submit" width="full" colorScheme="blue">
        Save Changes
      </Button>
    </form>
  );
}
