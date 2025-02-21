import React, { useState } from 'react';
import { Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';
import login from "../../../../api/login"

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await login({ email, password });
    };

    return (
        <VStack spacing={4} as="form" onSubmit={handleSubmit}>
            <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input 
                    type="text" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
            </FormControl>
            <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
            </FormControl>
            <Button type="submit" colorScheme="teal">Login</Button>
        </VStack>
    );
};

export default Login;