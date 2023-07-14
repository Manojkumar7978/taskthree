import React, { useContext } from 'react';
import {
    chakra, Flex, HStack, Box, IconButton,
    VStack,
    CloseButton, Button, InputGroup, InputLeftElement,
    useColorModeValue,
    useDisclosure,
    Input,
    Heading
} from '@chakra-ui/react';
import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

import { auth, provider } from '../../src/config.js'
import { signInWithPopup } from 'firebase/auth';
import recepeContext from './context.jsx';

const Nav = () => {
    let { setSearch, user, setUser } = useContext(recepeContext)
    const bg = useColorModeValue("tomato");
    const mobileNav = useDisclosure();


    const handelchange = (e) => {
        setSearch(e.target.value)
    }

    const handelclick = () => {
        signInWithPopup(auth, provider).then((res) => {
            setUser(res.user.email)
            localStorage.setItem('email', res.user.email)
        })
    }



    return (
        <React.Fragment>
            <chakra.header
                bg={bg}
                w="full"
                px={{
                    base: 2,
                    sm: 4,
                }}
                py={4}
                shadow="md"
            >
                <Flex alignItems="center" justifyContent="space-between" mx="auto">
                    <HStack display="flex" spacing={3} alignItems="center">
                        <Box
                            display={{
                                base: "inline-flex",
                                md: "none",
                            }}
                        >
                            <IconButton
                                display={{
                                    base: "flex",
                                    md: "none",
                                }}
                                aria-label="Open menu"
                                fontSize="20px"
                                color="gray.800"
                                _dark={{
                                    color: "inherit",
                                }}
                                variant="ghost"
                                icon={<HamburgerIcon />}
                                onClick={mobileNav.onOpen}

                            />
                            <VStack
                                pos="absolute"
                                top={0}
                                left={0}
                                right={0}
                                display={mobileNav.isOpen ? "flex" : "none"}
                                flexDirection="column"
                                pb={4}
                                bg={bg}
                                spacing={3}
                                rounded="sm"
                                shadow="sm"
                            >
                                <CloseButton
                                    aria-label="Close menu"
                                    justifySelf="self-start"
                                    onClick={mobileNav.onClose}
                                />
                                <Heading size='lg' color='#3eb489' >
                                    <Link to={'/'}>Recipe</Link>
                                </Heading>
                                <Link to={'/calorie'} style={{ fontWeight: 'bolder', color: 'white' }}>Calorie</Link>
                                <Link to={'/diet'} style={{ fontWeight: 'bolder', color: 'white' }}>Diet</Link>
                            </VStack>
                        </Box>

                        <chakra.div
                            gap={6}
                            display={{
                                base: "none",
                                md: "flex",
                            }}
                            alignItems='center'

                        >
                            <Heading size='lg' color='#3eb489' >
                                <Link to={'/'}>Recipe</Link>
                            </Heading>
                            <Link to={'/calorie'} style={{ fontWeight: 'bolder', color: 'white' }}>Calorie</Link>
                            <Link to={'/diet'} style={{ fontWeight: 'bolder', color: 'white' }}>Diet</Link>

                        </chakra.div>
                    </HStack>
                    <HStack
                        spacing={1}
                        display={mobileNav.isOpen ? "none" : "flex"}
                        alignItems="center"
                    >
                        <InputGroup>
                            <InputLeftElement pointerEvents="none">
                                <SearchIcon color="gray.800" />
                            </InputLeftElement>
                            <Input onChange={(e) => {
                                handelchange(e)
                            }} color="gray.800" borderRadius='20px' bg='white' maxW='250px' type="text" placeholder="Search Recipe" />
                        </InputGroup>

                        {
                            user ? <Button onClick={() => {
                                localStorage.removeItem('email')
                                setUser(null)
                            }} colorScheme='ghost'>Logout</Button> : <Button onClick={handelclick} colorScheme='ghost'>Login</Button>
                        }

                    </HStack>
                </Flex>
            </chakra.header>
        </React.Fragment>
    );
};

export default Nav;
