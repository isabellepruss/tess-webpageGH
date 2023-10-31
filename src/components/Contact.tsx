import { Text, HStack, VStack } from "@chakra-ui/react";

const Contact = () => {
  return (
    <>
      <VStack>
        <HStack>
          /* EMAIL */
          <Text as="b" fontSize="1xl">
            Email:
          </Text>
          <Text fontSize="sm">isabelle.pruss@outlook.com</Text>
          /*PHONE NUMBER */
          <Text as="b" fontSize="1xl">
            Phone:
          </Text>
          <Text fontSize="sm">913.475.6048</Text>
        </HStack>
      </VStack>
    </>
  );
};

export default Contact;
