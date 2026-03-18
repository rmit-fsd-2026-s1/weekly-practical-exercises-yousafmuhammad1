import { Box, Flex, Link, Spacer, Heading, Button } from "@chakra-ui/react";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    router.push("/");
  };

  return (
    <Flex bg="blue.500" color="white" p={4} align="center">
      <Heading size="md">MyApp</Heading>

      <Spacer />

      <NextLink href="/" passHref>
        <Link mr={4}>Home</Link>
      </NextLink>

      {isLoggedIn ? (
        <Button size="sm" onClick={handleLogout}>
          Logout
        </Button>
      ) : (
        <NextLink href="/login2" passHref>
          <Link>Login</Link>
        </NextLink>
      )}
    </Flex>
  );
}
