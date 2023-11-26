import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import axios from 'axios';
import { useState } from 'react';

export default function IndexPage() {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    const getQuote = () => {
        axios.get('https://api.quotable.io/random')
            .then(res => {
                console.log(res.data.content);
                setQuote(res.data.content);
                setAuthor(res.data.author)
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <View style={styles.container}>
            <Pressable onPress={getQuote} style={styles.buttonStyle}>
                <Text>Get A Quote</Text>
            </Pressable>
            {quote && <Text style={styles.quoteStyle}> {quote} </Text>}
            {author && <Text style={styles.quoteStyle}> {author} </Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonStyle: {
        backgroundColor: '#EADBC8',
        borderRadius: 26,
        padding: 10,
        marginTop: 20,
    },
    quoteStyle:{
        marginTop:20,
        textAlign:'center',
        color:'#F8F0E5',
    }
});
