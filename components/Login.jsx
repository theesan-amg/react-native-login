import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'

export default function Login({ history, location }) {
    const [username, setUsername] = useState(location.state ? location.state.username : "");
    const [password, setPassword] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        if (username.length >= 5 && password.length >= 5) {
            setIsDisabled(false);
            setErrorMsg("");
        } else if(username.length >= 1 && password.length >= 1) {
            setErrorMsg("Username and password must be at least 5 characters.");
        }
    }, [username, password]);
    
    return (
        <View style={styles.container}>
            <TextInput
                value={username}
                onChangeText={setUsername}
                placeholder="Your username"
                style={styles.input}
            />
            <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Your password"
                style={styles.input}
                secureTextEntry
            />
            {errorMsg && (
                <Text style={styles.errorMsg}>{errorMsg}</Text>
            )}
            <Button
                title="Login"
                onPress={() => history.push("/home", { username })}
                disabled={isDisabled}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        height: 40,
        width: "50%",
        backgroundColor: "lightgrey",
        padding: 10,
        margin: 5
    },
    errorMsg: {
        color: "crimson",
        fontWeight: "bold",
        textAlign: "center"
    }
});