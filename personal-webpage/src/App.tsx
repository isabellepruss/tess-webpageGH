import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Show,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ProfPic from "./components/ProfPic";
import Bio from "./components/Bio";
import Education from "./components/Education";
import Resume from "./components/Resume";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, //mobile devices
        lg: `"nav nav" "aside main"`, //1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          Aside
        </GridItem>
      </Show>

      <GridItem area="main">
        <Box paddingLeft={10}>
          <Heading as="h1" size="5x1"></Heading>
          <Flex>
            <Box marginRight={5}>
              <HStack>
                <ProfPic />
                <Bio />
              </HStack>
              <Resume />
              <Education />
            </Box>
          </Flex>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default App;
