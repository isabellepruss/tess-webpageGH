import { Box, Heading } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();

  console.log(error);

  return (
    <>
      <Navbar />
      <Box padding={5}>
        <Heading> Oops </Heading>
        <p>
          {isRouteErrorResponse(error) ? "Invalid Page" : "Unexpected Error"}
        </p>
      </Box>
    </>
  );
};

export default ErrorPage;
