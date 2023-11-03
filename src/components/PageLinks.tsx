import { HStack, Icon, Link, List, ListItem } from "@chakra-ui/react";
import { BsBookmarkDashFill, BsCaretRight } from "react-icons/bs";
const PageLinks = () => {
  return (
    <>
      {/* <Heading fontSize="2x" marginBottom={3}>
        Links
      </Heading> */}
      <List width="15%" padding={2}>
        <ListItem padding={3}>
          <HStack>
            <Icon as={BsBookmarkDashFill} boxSize="30px" />
            <Link href="/">Home Page</Link>
          </HStack>
        </ListItem>

        <ListItem padding={3}>
          <HStack>
            <Icon as={BsCaretRight} boxSize="30px" />
            <Link href="/devastation-and-need-for-expression/">
              Devastation
            </Link>
          </HStack>
        </ListItem>

        <ListItem padding={3}>
          <HStack>
            <Icon as={BsCaretRight} boxSize="30px" />
            <Link href="/baroque-era/">Baroque Era</Link>
          </HStack>
        </ListItem>

        <ListItem padding={3}>
          <HStack>
            <Icon as={BsCaretRight} boxSize="30px" />
            <Link href="/composers-respond-to-religious-divide/">
              Composers Respond
            </Link>
          </HStack>
        </ListItem>

        <ListItem padding={3}>
          <HStack>
            <Icon as={BsCaretRight} boxSize="30px" />
            <Link href="/perseverance-of-shutz-and-praetorious/">
              Perseverance
            </Link>
          </HStack>
        </ListItem>

        <ListItem padding={3}>
          <HStack>
            <Icon as={BsCaretRight} boxSize="30px" />
            <Link href="/sources/">Sources</Link>
          </HStack>
        </ListItem>
      </List>
    </>
  );
};

export default PageLinks;
