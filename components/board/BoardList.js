import Head from "next/head"
import tableStyles from "@/styles/Table.module.css"
import { useEffect ,useState} from "react"
import axios from "axios"

export function BoardList({columns, data}){
    
    return(
        <table className={tableStyles.table}>
            <thead>
                <tr><th colSpan={4}><h2>목록</h2></th></tr>
            </thead>
            <tbody>
            <tr >
                {columns.map((column) => (
                <td key={column} >{column}</td>
                ))}
            </tr>
                    {data.length == 0 ? <tr >
                    <td colSpan={3} >게시글 없음</td>
                    </tr>
                    :data.map((board)=> (
                        <tr key={board.title}>
                            <td >{board.date}</td>
                            <td >{board.title}</td>
                            <td >{board.content}</td>
                        </tr>
                    ))}
            </tbody>
        </table>
    )
}
