import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Anderson Freitas</Text>
        <Text color="gray.300" fontSize="small">
          andersonn@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Anderson Freitas"
        src="https://github.com/andrerson.png"
      />
    </Flex>
  )
}
