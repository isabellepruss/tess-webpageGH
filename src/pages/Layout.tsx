import { HStack } from "@chakra-ui/react";
import Navbar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import PageLinks from "../components/PageLinks";

const Layout = () => {
  return (
    <>
      <Navbar />
      <HStack align="top" padding={5}>
        <PageLinks />
        <Outlet />
      </HStack>
    </>
  );
};

export default Layout;
