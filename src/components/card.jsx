import React, { useContext } from 'react';
import { Button, Image, Box, Heading, chakra, useToast, CircularProgress, CircularProgressLabel } from '@chakra-ui/react';
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
            maxW="250px"
            mx="auto"
        >
            <Image borderRadius={'4'} src={el.recipe.image} alt={el.recipe.label} />
            <chakra.div h='70px'>
                <Heading as="h2" size="sm" mt={2} mb={6}>
                    {el.recipe.label}
                </Heading>
            </chakra.div>
            <chakra.div mb={4} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                <div><label style={{ color: 'green', fontSize: '16px' }} >Protein:</label> <CircularProgress size={'40px'} value={(el.recipe.digest[2].total / 900) * 100} color='green.500'>
                    <CircularProgressLabel>{Math.round(el.recipe.digest[2].total)}</CircularProgressLabel>
                </CircularProgress></div>
                <div><label style={{ color: 'green', fontSize: '16px' }}>Fat:</label> <CircularProgress size={'40px'} value={(el.recipe.digest[0].total / 900) * 100} color='green.500'>
                    <CircularProgressLabel>{Math.round(el.recipe.digest[0].total)}</CircularProgressLabel>
                </CircularProgress></div>

            </chakra.div>
            <Button onClick={handelclick} size={'sm'} colorScheme="red" w="full">
                Order Now
            </Button>
        </Box>
    );
}

export default Card;
