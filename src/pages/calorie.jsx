import { useContext, useEffect, useState } from 'react';
import { InputGroup, chakra, Input, Button, Heading } from '@chakra-ui/react';
import axios from 'axios';
import recipeContext from '../components/context';
import Card from '../components/card';
const Calorie = () => {
    let [max, setMax] = useState(2500)
    let [min, setMin] = useState(0)
    let { app_key, app_id } = useContext(recipeContext)
    let [data, setData] = useState(null)

    let handelclick = async () => {
        try {
            let res = await axios.get(`https://api.edamam.com/api/recipes/v2?app_key=${app_key}&app_id=${app_id}&calories=${min}-${max}&type=public`)
            setData(res.data.hits)
        } catch (error) {
            return error
        }
    }

    useEffect(() => {
        handelclick()

    }, [])


    return (
        <>
            <chakra.div p={'20px'} display={'inline-block'} w={'100%'}>
                <chakra.label color={'gray.700'} fontWeight={'bold'}>
                    Search By Calories
                </chakra.label>
                <InputGroup mt={2}>
                    <label style={{ fontWeight: 'bold' }}>From:</label> <Input onChange={(e) => {
                        setMin(e.target.value)
                    }} size={'sm'} ml={4} colorScheme='green' maxW={'100px'} />
                    <label style={{ marginLeft: '10px', fontWeight: 'bold' }}>To:</label> <Input onChange={(e) => {
                        setMax(e.target.value)
                    }} size={'sm'} ml={4} colorScheme='green' maxW={'100px'} />
                    <Button onClick={handelclick} ml={4} size={'sm'} colorScheme='green'>Find</Button>
                </InputGroup>

            </chakra.div>
            {
                data == null ? <Heading textAlign={'center'}>Loading...</Heading>
                    :
                    <chakra.div display={'flex'} flexWrap={'wrap'} gap={2}>

                        {

                            data.map((el, ind) => {
                                return <Card el={el} key={ind} id={ind} />

                            })
                        }
                    </chakra.div>
            }
        </>
    );
}

export default Calorie;
