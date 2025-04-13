import { Image, View } from "react-native";
import { styles } from "./styles/dashboard";
import { Button } from "../components/button"
import { router } from "expo-router"

export default function Dashboard() {
    return (
        <View style={styles.dash}>
            <Image 
                source={{uri: "https://www.icelandcampos.com.br/wp-content/uploads/2018/06/filhote_urso_polar_iceland.jpg"}} 
                alt="" 
                style={styles.img}
            />

            <Button title="Voltar" onPress={() => router.back()} />            
        </View>
    )
}