import { FormEvent, useState } from "react"

import { add, useAppDispatch } from "../store"

export function AddTodo() {
    const dispatch = useAppDispatch()

    const [newTodo, setNewTodo] = useState('')

    function handleNewTodo(e: FormEvent) {
        e.preventDefault()

        dispatch(add({
            newTodo
        }))

        setNewTodo('')
    }

    return (
        <form onSubmit={handleNewTodo}>
            <input
                type="text"
                placeholder="Novo to-do"
                value={newTodo}
                onChange={e => setNewTodo(e.target.value)}
            />

            <button type="submit">
                Adicionar
            </button>
        </form>
    )
}
