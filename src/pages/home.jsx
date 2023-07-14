import { useContext, useEffect, useState } from 'react';
import { Heading, chakra } from '@chakra-ui/react'
import recipeContext from '../components/context';
import axios from 'axios'
import Card from '../components/card';

let getData = async (q, key, id) => {
    try {
        let res = await axios.get(`https://api.edamam.com/api/recipes/v2?app_key=${key}&app_id=${id}&q=${q}&type=public`)
        console.log(res.data.hits)
        return res.data.hits
    } catch (error) {
        return error
    }
}

const Home = () => {
    let [data, setData] = useState(null)
    let { search, app_key, app_id } = useContext(recipeContext)
    useEffect(() => {
        getData(search, app_key, app_id)
            .then((res) => {
                setData([...res])
            }).catch((err) => {
                console.log(err)
            })
    }, [search])

    return (
        <chakra.div>
            {
                data == null ? <Heading textAlign={'center'}>Loading...</Heading>
                    :
                    <chakra.div display={'flex'} flexWrap={'wrap'}>
                        {
                            data.map((el, ind) => {
                                return <Card el={el} id={ind} key={ind} />
                            })
                        }

                    </chakra.div>
            }


        </chakra.div>
    );
}

export default Home;
