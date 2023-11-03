import React from "react";
import { HStack, Heading, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" paddingX="40px" paddingY="30px">
      <Heading as="h1" size="lg" textAlign="center">
        The Thirty Years War and Its Profound Influence on Western Classical
        Music
      </Heading>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
