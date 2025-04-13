import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { router, useLocalSearchParams } from "expo-router"
import { Button } from "../../components/button"
import { stylesPay } from "../styles/stylesPay"
import { useTarefas } from "../../database/useTarefas"

export default function Details(){
    const [ data, setDate ] = useState({
        name: "",
        quando: "",
        deveres: ""
    })

    const tarefasDatabase = useTarefas()
    const params = useLocalSearchParams<{id: string}>()

    useEffect(() => {
        if(params.id){
            tarefasDatabase.show(Number(params.id)).then((response) => {
                if(response){
                    setDate({
                        name: response.name,
                        quando: response.quando,
                        deveres: response.deveres
                    })
                }
            })
        }
    },[params.id])

    return (
        <View style={stylesPay.Container}>
            <Text style={stylesPay.Text}>
                ID: {params.id}
            </Text>
            <Text style={stylesPay.Text}>
               Name: {data.name}
            </Text>
            <Text style={stylesPay.Text}>
               Quando: {data.quando}
            </Text>
            <Text style={stylesPay.Text}>
               Dever: {data.deveres}
            </Text>
            <Button title="voltar" onPress={router.back}/>
        </View>
    )
}