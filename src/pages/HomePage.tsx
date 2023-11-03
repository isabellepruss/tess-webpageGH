import {
  Button,
  HStack,
  Heading,
  Icon,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BsChevronDoubleRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import homePage1 from "../assets/tess-home-page-1.jpeg";
import homePage2 from "../assets/home-page-2.jpeg";

const HomePage = () => {
  const navigate = useNavigate();

  const handleNextButton = () => {
    navigate("/devastation-and-need-for-expression/");
  };

  return (
    <VStack width={1300}>
      <VStack>
        <Heading textAlign="center">Home Page</Heading>
        <Text pl="20px" width={1000}>
          The Thirty Year's War (1618-1648) was a catastrophic conflict between
          many foreign powers that ravaged Europe, leaving a trail of
          destruction and death in its wake. While the war itself is a dark
          chapter in European history, it had a profound impact on various
          aspects of society, including politics, economics, and culture. One of
          the remarkable consequences of this conflict was its influence on the
          development of Western classical music. Explore the links on the left
          side of the screen to learn more.
        </Text>
        <HStack>
          <Image
            padding={3}
            src={homePage1}
            boxSize="400px"
            objectFit="cover"
          />
          <Image
            padding={3}
            src={homePage2}
            boxSize="400px"
            objectFit="cover"
          />
        </HStack>
      </VStack>
      <br />
      <HStack alignContent="right">
        <Button onClick={handleNextButton} width="100px">
          Next
        </Button>
        <Icon as={BsChevronDoubleRight} />
      </HStack>
    </VStack>
  );
};

export default HomePage;
