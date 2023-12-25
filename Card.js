import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Card({ item, id, handleStatus }) {
    return (
        <TouchableOpacity
            style={[
                styles.cardContainer,
                item.status === 'correct' ? styles.cardCorrect : null,
                item.status === 'wrong' ? styles.cardWrong : null,
            ]}
            onPress={() => handleStatus(id)}>
            <View style={styles.cardImage}>
                <Text style={{ textAlign: 'center', fontSize: 50, color:'#000'}}>{item.data}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        aspectRatio: 1,
        backgroundColor: '#fff',
        borderRadius: 5,
        margin: 5,
        marginTop: 50
    },
    cardImage: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
        // backgroundColor: 'green'
    },
    // cardActive: {
    //     transform: [{ rotateY: '0deg' }],
    // },
    cardCorrect: {
        backgroundColor: 'green'
    },
    cardWrong: {
        backgroundColor: 'red'
    },
})