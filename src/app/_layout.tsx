import { Slot } from "expo-router"
import { SQLiteProvider } from 'expo-sqlite'
import { databseSqlite } from "@/database/database"

export default function Layout(){
    return (
        <SQLiteProvider databaseName="mydatabase.db" onInit={databseSqlite}>
            <Slot/>
        </SQLiteProvider>
    )
}