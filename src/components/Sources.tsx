import { Button, HStack, Heading, Icon, Text, VStack } from "@chakra-ui/react";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Sources = () => {
  const navigate = useNavigate();
  const handlePreviousButton = () => {
    navigate("/perseverance-of-shutz-and-praetorious/");
  };
  return (
    <VStack width={1300}>
      <VStack>
        <Heading textAlign="center">Sources</Heading>
        <Text width={1300} textAlign="center">
          Brandi. 2012. “Sacred German Music in the Thirty Years’ War.” Musical
          Offerings 3 (1): <br />
          1–11. https://doi.org/10.15385/jmo.2012.3.1.1.
        </Text>
        <br />
        <Text width={1300} textAlign="center">
          “Musical Life of Leipzig during the Thirty Years’ War. Praetorius.”
          n.d. Www.revisionist.net. <br />
          Accessed November 1, 2023.
          http://www.revisionist.net/leipzig-music.html.
        </Text>
        <br />
        <Text width={1300} textAlign="center">
          “The Effect the Thirty Years’ War’ Had on Sacred Baroque Music.” 2018.
          Us.ukessays.com. November 2018.
          <br />
          https://us.ukessays.com/essays/music/the-thirty-years-war-and-its-effect-on-sacred-baroque-music.php.
        </Text>
      </VStack>
      <br />
      <HStack alignContent="left">
        <Icon as={BsChevronDoubleLeft} />
        <Button onClick={handlePreviousButton} width="100px">
          Previous
        </Button>
      </HStack>
    </VStack>
  );
};

export default Sources;
