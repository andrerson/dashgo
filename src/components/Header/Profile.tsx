import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Anderson Freitas</Text>
          <Text color="gray.300" fontSize="small">
            andersonn@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Anderson Freitas"
        src="https://github.com/andrerson.png"
      />
    </Flex>
  )
}
