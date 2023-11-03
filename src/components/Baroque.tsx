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
import baroqueImage from "../assets/Baroque.jpeg";
import baroqueImage2 from "../assets/baroque-2.jpeg";

const Baroque = () => {
  const navigate = useNavigate();
  const handleNextButton = () => {
    navigate("/composers-respond-to-religious-divide/");
  };

  const handlePreviousButton = () => {
    navigate("/devastation-and-need-for-expression/");
  };
  return (
    <VStack width={1200}>
      <VStack>
        <Heading textAlign="center">
          The Baroque Era: A Response to Turmoil
        </Heading>
        <HStack>
          <Image
            padding={3}
            src={baroqueImage}
            width={430}
            height={250}
            objectFit="cover"
          />
          <Text width={500}>
            The aftermath of the Thirty Years War coincided with the rise of the
            Baroque era in Western classical music. The Baroque period, spanning
            roughly from 1600 to 1750, was characterized by a desire for
            artistic expression, emotion, and intensity. Composers of this era
            turned to music as a means of expressing the complex emotions and
            experiences of a world that had been scarred by war. A fascinating
            counter point suggests that the term Baroque was considered a
            derogatory term to some in the aftermath of the war. The
            grotesqueness and over indulgence of the baroque music was seen as
            frivolous by many war torn communities.
          </Text>
        </HStack>
        <br />
        <HStack>
          <VStack>
            <Text width={500}>
              Composers like Johann Sebastian Bach, George Frideric Handel, and
              Antonio Vivaldi emerged during the Baroque era and made
              significant contributions to the world of classical music. Their
              compositions reflected the tumultuous times they lived in, with a
              combination of grandeur, ornamentation, and emotional depth that
              resonated with the sentiments of their audiences. Bach's choral
              compositions, for example, often conveyed themes of suffering and
              redemption, which were deeply relevant to a Europe recovering from
              the horrors of war.
            </Text>
            <br />
            <Text width={500}>
              During the height of the Thirty Years War, the lines between
              religion and politics became hard to define. It could be argued
              that religion was in service to the political engines, and that
              politics were enslaved to the religious authority. Both were
              undeniably intertwined in seventeenth century Europe. If a
              composer wanted to make a politically driven statement, it must
              first be approved by the composer’s patron or lord.
            </Text>
          </VStack>
          <Image
            padding={3}
            src={baroqueImage2}
            width={425}
            height={320}
            objectFit="cover"
          />
        </HStack>
      </VStack>
      <br />
      <HStack width={1000} justifyContent="space-between">
        <HStack alignContent="left">
          <Icon as={BsChevronDoubleLeft} />
          <Button onClick={handlePreviousButton} width="100px">
            Previous
          </Button>
        </HStack>
        <HStack alignContent="right">
          <Button onClick={handleNextButton} width="100px">
            Next
          </Button>
          <Icon as={BsChevronDoubleRight} />
        </HStack>
      </HStack>
    </VStack>
  );
};

export default Baroque;
