import { type SQLiteDatabase } from "expo-sqlite"

export async function databseSqlite(database: SQLiteDatabase) {
    await database.execAsync(`
        CREATE TABLE IF NOT EXISTS tarefas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            quando TEXT NOT NULL,
            deveres TEXT NOT NULL
        )
    `)
}