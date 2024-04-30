import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Style02 } from './class/style-externo';


export default function App() {
  return (
    <View
      style={{
        width: "auto",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#212121"
      }}>

      <Text style={Style02.title}>
          INDMO
      </Text>

      <Text style={{
        color: "#39FF70",
        fontFamily:"Roboto",
        fontWeight: "bold",
        fontSize: 50
        }}>
          Hello Word
        </Text>

        <Text style={Style02.pragraphWhite}>
          Texto com estilo de arquivo externo
        </Text>
    </View>
  );
}

