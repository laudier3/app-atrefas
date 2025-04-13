import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native"
import { styles } from "./styles"

type Props = TouchableOpacityProps & {
    title: string
}

export const Button = ({ title, ...rest }: Props) => {
    return (
        <TouchableOpacity 
            activeOpacity={0.5} 
            style={styles.btn}
            {...rest}
        >
            <Text style={styles.txt}>{title}</Text>
        </TouchableOpacity>
    )
}