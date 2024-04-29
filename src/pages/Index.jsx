import { Box, Flex, Heading, Text, Image, SimpleGrid, Link } from "@chakra-ui/react";
import { FaCalendarAlt, FaTrophy, FaImage } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <Flex direction="column" align="center" mb={10}>
        <Image
          borderRadius="full"
          boxSize="150px"
          src="/venus-williams.jpg"
          alt="Venus Williams"
          mb={4}
        />
        <Heading as="h1" size="xl">Venus Williams</Heading>
        <Text fontSize="lg" color="gray.500">Professional Tennis Player</Text>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Box as="section">
          <Heading as="h2" size="lg" mb={3}><FaTrophy /> Career Achievements</Heading>
          <Text fontSize="md">
            Venus Williams has won seven Grand Slam singles titles, including five at Wimbledon.
            She has also achieved four Olympic gold medals and has been ranked World No. 1 by the WTA.
          </Text>
        </Box>
        <Box as="section">
          <Heading as="h2" size="lg" mb={3}><FaCalendarAlt /> Upcoming Events</Heading>
          <Text fontSize="md">
            Stay tuned for upcoming matches and events. Check out her <Link color="teal.500" href="#">official schedule</Link>.
          </Text>
        </Box>
        <Box as="section">
          <Heading as="h2" size="lg" mb={3}><FaImage /> Gallery</Heading>
          <Text fontSize="md">
            Explore a collection of moments from Venus's life on and off the court in the <Link color="teal.500" href="#">gallery</Link>.
          </Text>
        </Box>
        <Box as="section">
          <Heading as="h2" size="lg" mb={3}>Biography</Heading>
          <Text fontSize="md">
            Born in Lynwood, California, Venus Williams has been a powerful force in women's tennis since the late 1990s.
            Alongside her sister Serena, she has redefined women's sports with her strength, skill, and perseverance.
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Index;