import {
  VStack,
  Heading,
  Image,
  Text,
  Button,
  HStack,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import composersImage from "../assets/composers.jpeg";

const Composers = () => {
  const navigate = useNavigate();
  const handleNextButton = () => {
    navigate("/perseverance-of-shutz-and-praetorious/");
  };

  const handlePreviousButton = () => {
    navigate("/baroque-era/");
  };
  return (
    <VStack width={1200}>
      <VStack>
        <Heading textAlign="center">
          Composers Respond to the Religious Divide
        </Heading>
        <Text width={1000} textAlign="left">
          The war was essentially a conflict between Protestant and Catholic
          powers, with each side seeking to assert its dominance. The religious
          divide and the associated tensions influenced the music of the era.
          Both camps believed in music’s divinity and its necessity to the
          practice of religion, but both had their own ideas of how it should be
          composed.
        </Text>
        <br />
        <Text width={1000} textAlign="left">
          The Catholic Church insisted that it was music’s complexity that
          connected it to God. All mass material was written in latin, and
          reflected the grandeur and solemnity of the Catholic faith. Composers
          like Palestrina and Gabrieli contributed to the polyphonic tradition
          of choral music, which reached its zenith during the Baroque era.
        </Text>
        <br />
        <Text width={1000} textAlign="left">
          On the other side of the religious divide, Protestant composers, such
          as Michael Praetorius, Johann Hermann Schein, and Heinrich Schütz,
          developed their own musical traditions that were deeply rooted in the
          Lutheran faith. Their compositions often featured clear,
          straightforward melodies and harmonies, making them accessible to
          congregations. A lyrical theme of these pieces were among the ideas
          that Jesus is the final authority and His mercy is the only thing
          necessary for salvation. This was in direct opposition to the catholic
          church which maintained the position that faith in addition to good
          works was the path to eternal life
        </Text>
        <Image
          padding={3}
          src={composersImage}
          width={650}
          height={375}
          objectFit="cover"
        />
      </VStack>
      <br />
      <HStack justifyContent="space-between" width={1000}>
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
  );
};

export default Composers;
