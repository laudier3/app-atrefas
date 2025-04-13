import { Text, Pressable, PressableProps, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"
import { styles } from './styles'

type Props = PressableProps & {
   data: {
    name: String
    quando: String
    deveres: String
   }
   onDelete: () => void
   onOpen: () => void
}

export function ProductList({ data, onDelete, onOpen, ...rest}: Props) {
    return (
        <Pressable {...rest} style={styles.pressable}>
            <Text>
                {data.name} - {data.quando}
            </Text>
            <TouchableOpacity onPress={onOpen}>
                <MaterialIcons name="visibility" size={24} color="bluedark" />
            </TouchableOpacity>
            <TouchableOpacity onPress={onDelete}>
                <MaterialIcons name="delete" size={24} color="red" />
            </TouchableOpacity>
        </Pressable>
    )
}