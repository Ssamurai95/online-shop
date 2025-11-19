import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { firebase } from '@react-native-firebase/auth';

const Login = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [code, setCode] = useState('');
    const [confirm, setConfirm] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const signInWithPhoneNumber = async () => {
        try {
            const confirmation = await firebase.auth().signInWithPhoneNumber(phoneNumber);
            setConfirm(confirmation);
            setErrorMessage('');
        } catch (error) {
            setErrorMessage('Invalid phone number. Please try again.');
        }
    };

    const confirmCode = async () => {
        try {
            await confirm.confirm(code);
            setErrorMessage('');
        } catch (error) {
            setErrorMessage('Invalid code. Please try again.');
        }
    };

    return (
        <View>
            {confirm ? (
                <TextInput 
                    placeholder="Enter verification code" 
                    onChangeText={setCode} 
                    value={code} 
                    keyboardType="numeric" 
                />
            ) : (
                <TextInput 
                    placeholder="Enter phone number" 
                    onChangeText={setPhoneNumber} 
                    value={phoneNumber} 
                    keyboardType="phone-pad" 
                />
            )}
            <Button title="Submit" onPress={confirm ? confirmCode : signInWithPhoneNumber} />
            {errorMessage ? <Text style={{ color: 'red' }}>{errorMessage}</Text> : null}
        </View>
    );
};

export default Login;