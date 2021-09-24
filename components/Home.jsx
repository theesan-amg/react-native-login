import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Button, ActivityIndicator } from 'react-native';
import { Card } from 'react-native-elements'

export default function Home({ location, history }) {
    const [randomUser, setRandomUser] = useState(null);
    const [userNumber, setUserNumber] = useState(0);

    const username = location.state.username;

    useEffect(() => {
        fetch("https://randomuser.me/api/")
        .then(res => res.json())
        .then(response => setRandomUser(response.results[0]));
    }, [userNumber]);

    return (
        <View style={styles.container}>
            <Text style={styles.welcomeMsg}>Bienvenue {username}</Text>
            {randomUser ? (
                <Card>
                    <Card.Title>{randomUser.name.first} {randomUser.name.last}</Card.Title>
                    <Card.Divider/>
                    <View style={styles.img}>
                        <Card.Image source={{ uri: randomUser.picture.large }} />
                    </View>
                    <Text style={{marginBottom: 10}}>
                        Street: {randomUser.location.street.name} - 
                        Postcode: {randomUser.location.postcode} - 
                        City: {randomUser.location.city} - 
                        Country: {randomUser.location.country} 
                    </Text>
                </Card>
            ) : (
                <ActivityIndicator size='large' color="green" />
            )}
            <Button title="Get random user" onPress={() => setUserNumber(Math.random())} />
            <Button title="Logout" onPress={() => history.push("/", { username })} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    welcomeMsg: {
        fontSize: 16,
        color: "dodgerblue",
        fontWeight: "bold"
    },
    img: {
        maxWidth: "100%",
        height: "auto",
        width: 400,
    }
});