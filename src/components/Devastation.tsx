import {
  Button,
  HStack,
  Heading,
  Image,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import devastationImage from "../assets/devastation-1.jpeg";

const Devastation = () => {
  const navigate = useNavigate();

  const handleNextButton = () => {
    navigate("/baroque-era/");
  };

  const handlePreviousButton = () => {
    navigate("/");
  };
  return (
    <>
      <VStack width={1200}>
        <VStack>
          <Heading textAlign="center">
            The War's Devastation and the Need for Expression
          </Heading>
          <HStack>
            <Text width={400} textAlign="left">
              The Thirty Year's War was prolonged and devastating conflict that
              involved most of the world's major European powers. The war was
              characterized by religious strife, territorial disputes, and
              shifting alliances. The widespread destruction of cities, town,
              and countryside, along with the loss of countless lives, created
              an atmosphere of despair and turmoil. Amid the chaos, people
              needed a means of expression and solace. Music, with its power to
              covey emotions and provide comfort, emrerged as a crucial outlet
              for these turbulent times.
            </Text>
            <Image
              padding={3}
              src={devastationImage}
              boxSize="400px"
              objectFit="cover"
            />
          </HStack>
        </VStack>
        <br />
        <HStack width={1000} justifyContent="space-between">
          <HStack>
            <Icon as={BsChevronDoubleLeft} />
            <Button onClick={handlePreviousButton} width="100px">
              Previous
            </Button>
          </HStack>
          <HStack>
            <Button onClick={handleNextButton} width="100px">
              Next
            </Button>
            <Icon as={BsChevronDoubleRight} />
          </HStack>
        </HStack>
      </VStack>
    </>
  );
};

export default Devastation;
