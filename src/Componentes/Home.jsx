// import styles from './PaginaInicial.module.css'

import {
  Flex,
  Box,
  Center,
  FormControl,
  Input,
  FormLabel,
  HStack,
  RadioGroup,
  Radio,
  Button,
} from "@chakra-ui/react";



export function Home(props) {
  return (

    <Box fontFamily='Poetsen One' marginTop='30px'>


      <Box fontSize='50px' color= 'rgb(255, 130, 130)'  >

        <h2 id='mercado' >Mercado Sabiá </h2>

      </Box>
      <Flex >

        <Center

          w="300px"
          h="330px"
          bg="white"
          border="3px solid black"
          borderRadius="10px"
          marginLeft="615px"
          marginTop="70px"
          padding="10px"

        >
          <FormControl  marginBottom='60px' marginLeft='25px'>
           
           <Box color='rgb(255, 210, 168)'>
            <h5  >Login </h5>
            </Box>

            <HStack>

              <Box marginTop='20px'>
                <FormLabel fontSize='25px'>E-mail</FormLabel>
                <Input id='email' />
              </Box>

            </HStack>
            <br />

            <HStack>
              <Box>
                <FormLabel fontSize='25px'>Senha</FormLabel>
                <Input id='senha' type="password" />
                <br />
                <Button margin='0px 0px 20px 0px' color='black' border='2px solid pink' borderRadius='20px' marginTop='20px' padding='20px' >LOGAR</Button>

              </Box>

            </HStack>

          </FormControl>
        </Center>
      </Flex>
    </Box>
  );
}


// <h1>Home</h1>

