import { useState } from "react";
import { useRouter } from "next/router";
import { Box, Button, Input, Heading, VStack, Text } from "@chakra-ui/react";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const router = useRouter();

  const handleLogin = () => {
    if (email === "admin@test.com" && password === "1234") {
      localStorage.setItem("user", JSON.stringify({ email }));
      setMessage("Login successful ✅");

      // redirect to home
      router.push("/");
    } else {
      setMessage("Invalid credentials ");
    }
  };

  return (
    <Box
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box bg="white" p={8} borderRadius="lg" boxShadow="md">
        <VStack gap="4">
          <Heading size="md">Login</Heading>

          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button colorScheme="blue" width="100%" onClick={handleLogin}>
            Login
          </Button>

          <Text fontSize="sm">{message}</Text>
        </VStack>
      </Box>
    </Box>
  );
}
