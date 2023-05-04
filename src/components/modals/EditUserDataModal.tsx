import { Button, Flex, Input, Text } from '@chakra-ui/react';

import { useEditUserData } from '@/hooks/useEditUserData';
import { ContentBox } from '@/theme/components/contentBox';

interface EditUserDataProps {
  onClose: () => void;
}

export const EditUserData = ({ onClose }: EditUserDataProps) => {
  const { name, city, setNameInput, setCityInput, handleSubmit } =
    useEditUserData(onClose);

  return (
    <Flex
      position="fixed"
      w="100vw"
      h="100vh"
      zIndex="9999"
      top="0"
      left="0"
      justify="center"
      pointerEvents="none"
      alignItems="center">
      <ContentBox
        display="flex"
        pointerEvents="auto"
        flexDirection="column"
        w="36rem"
        h="18rem"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        p="2rem"
        bgColor="modalBg"
        borderWidth="1px"
        borderStyle="solid"
        borderColor="modalBorder"
        borderRadius="30px"
        position="relative"
        sx={{
          '& *': {
            fontFamily: 'Heebo',
          },
        }}>
        <form onSubmit={handleSubmit}>
          <Flex w="100%" justify="center" mb="0.5rem">
            <Text variant="dataModalSubtitle" fontSize="1.6rem" mb="2rem">
              Enter your name and location
            </Text>
          </Flex>

          <Flex direction="column">
            <Flex
              gap="1rem"
              sx={{
                '& input': {
                  borderWidth: 0,
                  backgroundColor: 'plannerInputBg',
                  '&:hover': {
                    backgroundColor: 'plannerInputHoverBg',
                  },
                },
              }}>
              <Input
                placeholder="Name"
                _placeholder={{ color: 'secondaryText' }}
                value={name}
                onChange={(e) => setNameInput(e.target.value)}
                required
              />
              <Input
                placeholder="City"
                _placeholder={{ color: 'secondaryText' }}
                value={city}
                onChange={(e) => setCityInput(e.target.value)}
                required
              />
            </Flex>
            <Flex w="100%" justify="center" mt="2.5rem" gap="1rem">
              <Button
                variant="transparent"
                height="3rem"
                borderRadius="10px"
                onClick={onClose}
                w="10rem"
                _hover={{ bg: 'transparentButtonHoverBg' }}>
                Cancel
              </Button>
              <Button
                variant="solid"
                bg="mainColor"
                height="3rem"
                borderRadius="10px"
                type="submit"
                w="10rem"
                _hover={{ bg: 'mainColorHover' }}>
                Accept
              </Button>
            </Flex>
          </Flex>
        </form>
      </ContentBox>
    </Flex>
  );
};