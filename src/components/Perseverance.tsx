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
import praetorious from "../assets/praetorious.jpeg";

const Perseverance = () => {
  const navigate = useNavigate();
  const handleNextButton = () => {
    navigate("/sources/");
  };

  const handlePreviousButton = () => {
    navigate("/composers-respond-to-religious-divide/");
  };
  return (
    <VStack width={1200}>
      <VStack>
        <Heading textAlign="center">
          Perseverance of Shutz and Praetorious
        </Heading>
        <HStack>
          <VStack>
            <Text width={600}>
              As the devastation of the war continued, it became more and more
              difficult to steadily support musicians and their endeavors. The
              resources available to musicians varied from community to
              community, depending on how much a necessity music was deemed to
              be. Composers often were poor, and relinquished their positions on
              religious courts to seek other employment. However, some musicians
              continued on through the strife of war torn Germany. Michael
              Praetorius and Kapellmeister Heinrich Schütz continued composing
              for no pay.
            </Text>
            <br />
            <Text width={600}>
              Schütz composed his largest work in Dresden, Germany in 1617. A
              polychoral work entitled Psalms of David scored for four vocal
              soloists and a large accompaniment group, referred to as the
              “Capellen”. However, in his later works such as, Musikalische
              Exequien, Schütz uses a much thinner texture with no required
              instrumental accompaniment. The text of Musikalische Exequien
              presents a double meaning: a reflection on the life of a deceased
              loved one as well as the reminder of hope in the midst of the
              conflict in Dresden. The text describes the desperate situation of
              the biblical character of Job, who would not curse God in his pain
              but chose to find hope in Him instead. Many works during this time
              featured more vocalists than instrumentalists, as the practice of
              learning instruments at this time could’ve been seen as excessive
              or frivolous.
            </Text>
            <br />
            <Text width={600}>
              Schütz and Praetorius were important players in classical music
              post Thirty Years War because they were able to not only convey
              how the war personally impacted them, but also their communities.
            </Text>
          </VStack>
          <Image
            padding={3}
            src={praetorious}
            width={470}
            height={600}
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
  );
};

export default Perseverance;
