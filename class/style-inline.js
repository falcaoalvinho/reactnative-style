import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function StyleInline() {
    return (
    <View style={Style01.container}>
        <Text style={Style01.title}>INDMO</Text>
        <Text style={Style01.subTitle}>Hello Word</Text>
    </View>
    )}

const Style01 = StyleSheet.create({
    container: {
        width: "auto",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#212121"
    },
    title: {
        marginTop: 50,
        color: "#39FF70",
        fontFamily:"Roboto",
        fontWeight: "bold",
        fontSize: 50
    },
    subTitle: {
        color: "#d9d9d9",
        fontFamily:"Roboto",
        fontWeight: "bold",
        fontSize: 40
    }
})