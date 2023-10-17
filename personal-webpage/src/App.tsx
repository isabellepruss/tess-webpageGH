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
  VStack,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ProfPic from "./components/ProfPic";
import Bio from "./components/Bio";
import Education from "./components/Education";
import Resume from "./components/Resume";
import Research from "./components/Research";
import Contact from "./components/Contact";

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
                <VStack>
                  <Bio />
                  <Contact />
                </VStack>
              </HStack>
              <Resume />
              <Education />
              <Research />
            </Box>
          </Flex>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default App;
