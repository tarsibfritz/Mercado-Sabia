import { Card, SimpleGrid, CardHeader, Button, Heading, Text, CardBody, Box, CardFooter } from '@chakra-ui/react'

export function Produto() {
  return (
    <div>
      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(260px, 1fr))' padding='20px'>
        {/* CARD 1 */}
        <Card 
          display='flex' 
          flexDirection='column'
          justifyContent='space-between' 
          margin='20px' 
          backgroundColor="#fff" 
          borderRadius='10px'
          maxHeight='420px'
          maxWidth='300px'
          position='relative'
        >
          <CardHeader textAlign='center'>
            <Box display='flex' justifyContent='center'>
            <img src='https://static.paodeacucar.com/img/uploads/1/349/607349.png' width='150px' ></img>
            </Box>
            <Heading size='sm'>Macarrão Instantâneo de Galinha Caipira Nissin 85g</Heading>
          </CardHeader>
          
          <CardBody>
            <Text fontSize='18px' fontWeight={450}>R$ 3,09</Text>
          </CardBody>

          <CardFooter 
          display='flex' 
          justifyContent='center' 
          alignItems='center' 
          marginBottom='20px'
          >
            <a href='https://www.paodeacucar.com/produto/169981/macarrao-instantaneo-de-galinha-caipira-nissin-miojo-lamen-pacote-85g' target='_blank'>
              <Button  fontFamily='Poetsen One' color='black' border='2px solid pink' borderRadius='20px' marginTop='20px' padding='20px'>Comprar</Button>
            </a>
          </CardFooter>
        </Card>

        {/* CARD 2 */}
        <Card 
          display='flex' 
          flexDirection='column'
          justifyContent='space-between' 
          margin='20px' 
          backgroundColor="#fff" 
          borderRadius='10px'
          maxHeight='420px'
          maxWidth='300px'
        >
          <CardHeader textAlign='center'>
            <Box display='flex' justifyContent='center'>
            <img src='https://static.paodeacucar.com/img/uploads/1/822/665822.jpg' width='150px' ></img>
            </Box>
            <Heading size='sm'>Presunto Cozido Perdigão Fatiado 200g</Heading>
          </CardHeader>
          
          <CardBody>
            <Text fontSize='18px' fontWeight={450}>R$ 7,98</Text>
          </CardBody>

          <CardFooter display='flex' justifyContent='center' alignItems='center' marginBottom='20px'>
            <a href='https://www.paodeacucar.com/produto/27548/presunto-cozido-perdigao-fatiado-200g' target='_blank'>
              <Button  fontFamily='Poetsen One' color='black' border='2px solid pink' borderRadius='20px' marginTop='20px' padding='20px'>Comprar</Button>
            </a>
          </CardFooter>
        </Card>

        {/* CARD 3 */}
        <Card 
          display='flex' 
          flexDirection='column'
          justifyContent='space-between' 
          margin='20px' 
          backgroundColor="#fff" 
          borderRadius='10px'
          maxHeight='420px'
          maxWidth='300px'
        >
          <CardHeader textAlign='center'>
            <Box display='flex' justifyContent='center'>
            <img src='https://static.paodeacucar.com/img/uploads/1/652/12571652.jpg' width='150px' ></img>
            </Box>
            <Heading size='sm'>Batata 1kg</Heading>
          </CardHeader>
          
          <CardBody>
            <Text fontSize='18px' fontWeight={450}>R$ 14,90</Text>
          </CardBody>

          <CardFooter display='flex' justifyContent='center' alignItems='center' marginBottom='20px'>
            <a href='https://www.paodeacucar.com/produto/67746/batata-1kg' target='_blank'>
              <Button  fontFamily='Poetsen One' color='black' border='2px solid pink' borderRadius='20px' marginTop='20px' padding='20px'>Comprar</Button>
            </a>
          </CardFooter>
        </Card>

        {/* CARD 4 */}
        <Card 
          display='flex' 
          flexDirection='column'
          justifyContent='space-between' 
          margin='20px' 
          backgroundColor="#fff" 
          borderRadius='10px'
          maxHeight='420px'
          maxWidth='300px'
        >
          <CardHeader textAlign='center'>
            <Box display='flex' justifyContent='center'>
            <img src='https://static.paodeacucar.com/img/uploads/1/193/12874193.jpg' width='150px' ></img>
            </Box>
            <Heading size='sm'>Energético Red Bull Energy Drink 250ml</Heading>
          </CardHeader>
          
          <CardBody>
            <Text fontSize='18px' fontWeight={450}>R$ 9,99</Text>
          </CardBody>

          <CardFooter display='flex' justifyContent='center' alignItems='center' marginBottom='20px'>
            <a href='https://www.paodeacucar.com/produto/150403/energetico-red-bull-energy-drink-250-ml' target='_blank'>
              <Button  fontFamily='Poetsen One' color='black' border='2px solid pink' borderRadius='20px' marginTop='20px' padding='20px'>Comprar</Button>
            </a>
          </CardFooter>
        </Card>

        {/* CARD 5 */}
        <Card 
          display='flex' 
          flexDirection='column'
          justifyContent='space-between' 
          margin='20px' 
          backgroundColor="#fff" 
          borderRadius='10px'
          maxHeight='420px'
          maxWidth='300px'
        >
          <CardHeader textAlign='center'>
            <Box display='flex' justifyContent='center'>
            <img src='https://static.paodeacucar.com/img/uploads/1/908/12568908.jpg' width='150px' ></img>
            </Box>
            <Heading size='sm'>Cenoura 500g</Heading>
          </CardHeader>
          
          <CardBody>
            <Text fontSize='18px' fontWeight={450}>R$ 7,45</Text>
          </CardBody>

          <CardFooter display='flex' justifyContent='center' alignItems='center' marginBottom='20px'>
            <a href='https://www.paodeacucar.com/produto/65429/cenoura-500g' target='_blank'>
              <Button  fontFamily='Poetsen One' color='black' border='2px solid pink' borderRadius='20px' marginTop='20px' padding='20px'>Comprar</Button>
            </a>
          </CardFooter>
        </Card>

        {/* CARD 6 */}
        <Card 
          display='flex' 
          flexDirection='column'
          justifyContent='space-between' 
          margin='20px' 
          backgroundColor="#fff" 
          borderRadius='10px'
          maxHeight='420px'
          maxWidth='300px'
        >
          <CardHeader textAlign='center'>
            <Box display='flex' justifyContent='center'>
            <img src='https://static.paodeacucar.com/img/uploads/1/909/24110909.jpg' width='150px' ></img>
            </Box>
            <Heading size='sm'>Molho de Tomate Tradicional Heinz 300g</Heading>
          </CardHeader>
          
          <CardBody>
            <Text fontSize='18px' fontWeight={450}>R$ 3,39</Text>
          </CardBody>

          <CardFooter display='flex' justifyContent='center' alignItems='center' marginBottom='20px'>
            <a href='https://www.paodeacucar.com/produto/1373106/molho-de-tomate-tradicional-heinz-pouch-300g' target='_blank'>
              <Button  fontFamily='Poetsen One' color='black' border='2px solid pink' borderRadius='20px' marginTop='20px' padding='20px'>Comprar</Button>
            </a>
          </CardFooter>
        </Card>

        {/* CARD 7 */}
        <Card 
          display='flex' 
          flexDirection='column'
          justifyContent='space-between' 
          margin='20px' 
          backgroundColor="#fff" 
          borderRadius='10px'
          maxHeight='420px'
          maxWidth='300px'
        >
          <CardHeader textAlign='center'>
            <Box display='flex' justifyContent='center'>
            <img src='https://static.paodeacucar.com/img/uploads/1/790/26941790.jpg' width='150px' ></img>
            </Box>
            <Heading size='sm'>Pão Tortilha Original Rap10 297g</Heading>
          </CardHeader>
          
          <CardBody>
            <Text fontSize='18px' fontWeight={450}>R$ 11,29</Text>
          </CardBody>

          <CardFooter display='flex' justifyContent='center' alignItems='center' marginBottom='20px'>
            <a href='https://www.paodeacucar.com/produto/47423/pao-tortilha-original-rap10-pouch-297g' target='_blank'>
              <Button  fontFamily='Poetsen One' color='black' border='2px solid pink' borderRadius='20px' marginTop='20px' padding='20px'>Comprar</Button>
            </a>
          </CardFooter>
        </Card>

        {/* CARD 8 */}
        <Card 
          display='flex' 
          flexDirection='column'
          justifyContent='space-between' 
          margin='20px' 
          backgroundColor="#fff" 
          borderRadius='10px'
          maxHeight='420px'
          maxWidth='300px'
        >
          <CardHeader textAlign='center'>
            <Box display='flex' justifyContent='center'>
            <img src='https://static.paodeacucar.com/img/uploads/1/178/12571178.jpg' width='150px' ></img>
            </Box>
            <Heading size='sm'>Banana Maçã 600g</Heading>
          </CardHeader>
          
          <CardBody>
            <Text fontSize='18px' fontWeight={450}>R$ 10,14</Text>
          </CardBody>

          <CardFooter display='flex' justifyContent='center' alignItems='center' marginBottom='20px'>
            <a href='https://www.paodeacucar.com/produto/159502/banana-maca-600g' target='_blank'>
              <Button  fontFamily='Poetsen One' color='black' border='2px solid pink' borderRadius='20px' marginTop='20px' padding='20px'>Comprar</Button>
            </a>
          </CardFooter>
        </Card>

        {/* CARD 9 */}
        <Card 
          display='flex' 
          flexDirection='column'
          justifyContent='space-between' 
          margin='20px' 
          backgroundColor="#fff" 
          borderRadius='10px'
          maxHeight='420px'
          maxWidth='300px'
        >
          <CardHeader textAlign='center'>
            <Box display='flex' justifyContent='center'>
            <img src='https://static.paodeacucar.com/img/uploads/1/70/24583070.jpg' width='150px' ></img>
            </Box>
            <Heading size='sm'>Café Torrado e Moído Tradicional 3 Corações</Heading>
          </CardHeader>
          
          <CardBody>
            <Text fontSize='18px' fontWeight={450}>R$ 20,49</Text>
          </CardBody>

          <CardFooter display='flex' justifyContent='center' alignItems='center' marginBottom='20px'>
            <a href='https://www.paodeacucar.com/produto/82810/cafe-torrado-e-moido-tradicional-3-coracoes-pacote-500g' target='_blank'>
              <Button  fontFamily='Poetsen One' color='black' border='2px solid pink' borderRadius='20px' marginTop='20px' padding='20px'>Comprar</Button>
            </a>
          </CardFooter>

          

          

        </Card>



        <Card 
          display='flex' 
          flexDirection='column'
          justifyContent='space-between' 
          margin='20px' 
          backgroundColor="#fff" 
          borderRadius='10px'
          maxHeight='420px'
          maxWidth='300px'
        >
          <CardHeader textAlign='center'>
            <Box display='flex' justifyContent='center'>
            <img src='https://static.paodeacucar.com/img/uploads/1/225/16572225.jpg' width='150px' ></img>
            </Box>
            <Heading size='sm'>Gelato Sabor Leite BACIO DI LATTE Pote 490ml</Heading>
          </CardHeader>
          
          <CardBody>
            <Text fontSize='18px' fontWeight={450}>R$ 43,99</Text>
          </CardBody>

          <CardFooter display='flex' justifyContent='center' alignItems='center' marginBottom='20px'>
            <a href='https://www.paodeacucar.com/produto/82810/cafe-torrado-e-moido-tradicional-3-coracoes-pacote-500g' target='_blank'>
              <Button  fontFamily='Poetsen One' color='black' border='2px solid pink' borderRadius='20px' marginTop='20px' padding='20px'>Comprar</Button>
            </a>
          </CardFooter>

          

          

        </Card>


      </SimpleGrid>
    </div>
  )
}