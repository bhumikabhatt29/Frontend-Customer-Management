import { useState } from "react";
import {
  Button,
  Box,
  Card,
  CardBody,
  CardHeader,
  Input,
  FormLabel,
  Heading,
  Stack,
  Text,
  Divider,
  useToast,
} from "@chakra-ui/react";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    id: "USR123",
    name: "John Doe",
    email: "john@example.com",
    role: "admin",
  });

  const toast = useToast();

  const handleSaveChanges = () => {
    toast({
      title: "Changes Saved.",
      description: "Your profile has been updated successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    setIsEditing(false);
  };

  return (
    <Box
      maxW="lg"
      mx="auto"
      p={6}
      bg="white"
      borderRadius="lg"
      boxShadow="lg"
      border="1px"
      borderColor="gray.200"
    >
      <Card variant="outline">
        <CardHeader>
          <Heading size="lg" textAlign="center" color="teal.600">
            My Profile
          </Heading>
        </CardHeader>
        <CardBody>
          <Stack spacing={5}>
            <Stack spacing={2}>
              <FormLabel htmlFor="user-id" fontSize="sm" color="gray.500">
                User ID
              </FormLabel>
              <Input
                id="user-id"
                value={user.id}
                disabled
                borderColor="gray.300"
                _disabled={{ bg: "gray.100" }}
              />
            </Stack>
            <Stack spacing={2}>
              <FormLabel htmlFor="name" fontSize="sm" color="gray.500">
                Name
              </FormLabel>
              <Input
                id="name"
                value={user.name}
                disabled={!isEditing}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                borderColor="gray.300"
                _disabled={{ bg: "gray.100" }}
              />
            </Stack>
            <Stack spacing={2}>
              <FormLabel htmlFor="email" fontSize="sm" color="gray.500">
                Email
              </FormLabel>
              <Input
                id="email"
                value={user.email}
                disabled={!isEditing}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                borderColor="gray.300"
                _disabled={{ bg: "gray.100" }}
              />
            </Stack>
            <Stack spacing={2}>
              <FormLabel htmlFor="role" fontSize="sm" color="gray.500">
                Role
              </FormLabel>
              <Input
                id="role"
                value={user.role}
                disabled
                borderColor="gray.300"
                _disabled={{ bg: "gray.100" }}
              />
            </Stack>
            <Divider />
            <Button
              colorScheme="teal"
              onClick={() => {
                if (isEditing) {
                  handleSaveChanges();
                } else {
                  setIsEditing(true);
                }
              }}
              variant="solid"
              width="full"
            >
              {isEditing ? "Save Changes" : "Edit Profile"}
            </Button>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
}

export default Profile;
