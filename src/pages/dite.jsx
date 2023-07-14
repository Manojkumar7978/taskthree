import { useState, useEffect, useContext } from 'react';
import { Select, chakra, Heading } from '@chakra-ui/react';
import axios from 'axios';
import recipeContext from '../components/context';
import Card from '../components/card';


const Dite = () => {
    let [diet, setDiet] = useState('balanced')
    let [data, setData] = useState(null)

    let { app_key, app_id } = useContext(recipeContext)

    let handelclick = async () => {
        try {
            let res = await axios.get(`https://api.edamam.com/api/recipes/v2?app_key=${app_key}&app_id=${app_id}&diet=${diet}&type=public`)
            console.log(res)
            setData(res.data.hits)
        } catch (error) {
            return error
        }
    }

    useEffect(() => {
        handelclick()

    }, [diet])
    return (
        <div>
            <chakra.div p={'20px'} display={'flex'}>
                <chakra.label color={'gray.700'} fontWeight={'bold'} >Search by Dite</chakra.label>

                <Select onChange={(e) => {
                    setDiet(e.target.value)
                }} ml={2} defaultValue={'vegetarian'} size={'sm'} w={'250px'}>
                    <option value={'high-fiber'}>High-Fiber</option>
                    <option value={'High-protein'}>High-Protein</option>
                    <option value={'low-carb'}>Low-Carb</option>
                    <option value={'low-fat'}>Low-Fat</option>
                    <option value={'low-sodium'}>Low-Sodium</option>
                    {/* <option value={'low-sugar'}>Low-Sugar</option> */}
                    {/* <option value={'alcohol-free'}>Alcohol-Free</option> */}
                    <option value={'balanced'}>Balanced</option>
                    {/* <option value={'immunity'}>Immunity</option> */}
                </Select>


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
        </div>
    );
}

export default Dite;
