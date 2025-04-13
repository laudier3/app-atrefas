import { Alert, Text, View, FlatList } from "react-native"
import { stylesPay } from "./styles/stylesPay"
import { Button } from "@/components/button"
import { Input } from "@/components/input"
import { useEffect, useState } from "react"
import { router } from "expo-router"
import { TarefasDb, useTarefas } from "@/database/useTarefas"
import { ProductList } from "@/components/productsList"

export default function Index(){

  const [id, setId] = useState("")
  const [search, setSearch] = useState("")
  const [name, setName] = useState("")
  const [quando, setQuando] = useState("")
  const [deveres, setDeveres] = useState("")
  const [tarefa, setTarefas] = useState<TarefasDb[]>([])

  const createDatabse = useTarefas()

  async function create() {
    try {
      const response = await createDatabse.create({name, quando, deveres})

      Alert.alert("Tarefa criada com sucesso id: " + response.insertdRowId)
    } catch (error) {
      console.info(error)
    }
  }

  async function update() {
    try {
      await createDatabse.update({
        id: Number(id), 
        name, 
        quando, 
        deveres
      })

      Alert.alert("Tarefa atualizado com sucesso!")
    } catch (error) {
      console.info(error)
    }
  }

  async function remove(id: number) {
    try {
      await createDatabse.deleteItem(id)
      await listTarefas()
    } catch (error) {
      console.info(error)
    }
  }
  /*const HandleEnter = () => {
    router.navigate("/dashboard")
  }*/

  async function listTarefas() {
    try {
      const response = await createDatabse.searchTarefas(search)
      setTarefas(response)
    } catch (error) {
      console.info(error)
    }
  }

  function details(item: TarefasDb){
    setId(String(item.id))
    setName(item.name)
    setQuando(item.quando)
    setDeveres(item.deveres)
  }

  async function handleSave() {
    if (id) {
      update()
    } else {
      create()
    }

    setId("")
    setName("")
    setQuando("")
    setDeveres("")
    await listTarefas()
  }

  useEffect(() => {
    listTarefas()
  }, [search])

  return (
    <View style={stylesPay.Container}>
      <Text style={stylesPay.Text}>Criar tarefa</Text>
      <Input placeholder="Name" onChangeText={setName} value={name}/>
      <Input placeholder="Qaundo" onChangeText={setQuando} value={quando}/>
      <Input placeholder="Deveres" onChangeText={setDeveres} value={deveres}/>
      
      <Button title={id ? "Atualizar" : "Criar"} onPress={handleSave}/>

      <Input placeholder="Pesquisar" onChangeText={setSearch}/>

      <FlatList 
        data={tarefa}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <ProductList 
            data={item} 
            onPress={() => details(item)} 
            onDelete={() => remove(item.id)}
            onOpen={() => router.navigate(`/details/${item.id}`)}
          />
        )}
        contentContainerStyle={{ gap: 16}}
      />
    </View>
  );
};