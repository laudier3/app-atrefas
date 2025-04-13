import { useSQLiteContext } from "expo-sqlite"

export type TarefasDb = {
    id: number,
    name: string,
    quando: string,
    deveres: string
}

export function useTarefas(){

    const database = useSQLiteContext()

    async function create(data: Omit<TarefasDb, "id">) {
        const statement = await database.prepareAsync(
            `INSERT INTO tarefas (name, quando, deveres) VALUES ($name, $quando, $deveres)`
        )
        
        try {
            const result = await statement.executeAsync({
                $name: data.name,
                $quando: data.quando,
                $deveres: data.deveres,
            })

            const insertdRowId = result.lastInsertRowId.toLocaleString()

            return { insertdRowId }
            
        } catch (error) {
            throw error
        } finally {
            await statement.finalizeAsync()
        }
    }

    async function update(data: TarefasDb) {
        const statement = await database.prepareAsync(
            `UPDATE tarefas SET name = $name, quando = $quando, deveres = $deveres WHERE id = $id`
        )
        
        try {
            await statement.executeAsync({
                $id: data.id,
                $name: data.name,
                $quando: data.quando,
                $deveres: data.deveres,
            })
            
        } catch (error) {
            throw error
        } finally {
            await statement.finalizeAsync()
        }
    }

    async function searchTarefas(name: string) {
        try {
            const query = "SELECT * FROM tarefas WHERE name LIKE ?"

            const response = await database.getAllAsync<TarefasDb>(query, `%${name}%`)

            return response
        } catch (error) {
            
        }
    }
    
    async function deleteItem(id: number) {
        try {
            await database.execAsync(`DELETE FROM tarefas WHERE id = ${id}`)
        } catch (error) {
            throw error
        }
    }

    async function show(id: number) {
        try {
            const query = `SELECT * FROM tarefas WHERE id = ?`

            const response = await database.getFirstAsync<TarefasDb>(query, [
                id,
            ])

            return response
        } catch (error) {
          throw error  
        }
    }

    return { create, searchTarefas, update, deleteItem, show}
}