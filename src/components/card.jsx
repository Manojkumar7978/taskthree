import React, { useContext } from 'react';
import { Button, Image, Box, Heading, chakra, useToast } from '@chakra-ui/react';
import recipeContext from './context';

const Card = ({ el, id }) => {
    let toast = useToast()
    let { user } = useContext(recipeContext)

    let handelclick = () => {
        if (!user) {
            toast({
                title: 'Login to order!',
                status: 'info',
                duration: '3000',
                isCloseble: true,
                variant: 'top-accent',
                position: 'top'
            })
        } else {
            toast({
                title: 'Order Placed',
                status: 'success',
                duration: '3000',
                isCloseble: true,
                variant: 'top-accent',
                position: 'top'
            })
        }
    }
    return (

        <Box
            key={id}
            borderWidth="1px"
            borderRadius="md"
            overflow="hidden"
            boxShadow="md"
            p={4}
            maxW="200px"
            mx="auto"
        >
            <Image borderRadius={'4'} src={el.recipe.image} alt={el.recipe.label} />
            <chakra.div h='70px'>
                <Heading as="h2" size="sm" mt={2} mb={4}>
                    {el.recipe.label}
                </Heading>
            </chakra.div>
            <Button onClick={handelclick} size={'sm'} colorScheme="red" w="full">
                Order Now
            </Button>
        </Box>
    );
}

export default Card;
