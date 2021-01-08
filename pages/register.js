import React, { useState } from 'react'

function Register() {
    const [goal, setGoal] = useState({
        name: '',
        description: '',
        status: ''
    })

    const [msg, setMsg] = useState({
        formSave: false,
        type: '',
        message: ''
    })

    function getValueInput(e) {
        setGoal({ ...goal, [e.target.name]: e.target.value })
    }

    async function getSendForm(e) {
        e.preventDefault()
        try {
            const result = await fetch('http://localhost:3333/goals', {
                method: 'POST',
                body: JSON.stringify(goal),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const resultApi = await result.json()

            if (resultApi.error) {
                setMsg({
                    formSave: false,
                    type: 'error',
                    message: resultApi.message
                })
            } else {
                setMsg({
                    formSave: false,
                    type: 'success',
                    message: resultApi.message
                })
            }
        } catch (err) {
            setMsg({
                formSave: false,
                type: 'error',
                message: 'Erro ao salver dados'
            })
        }
    }

    return (
        <>
            <h1>Register my goals</h1>
            <hr />

            {msg.type === 'error' ? <p>{msg.message}</p> : ""}
            {msg.type === 'success' ? <p>{msg.message}</p> : ""}

            <form onSubmit={getSendForm}>
                <label>Nome</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Insira seu nome"
                    onChange={getValueInput}
                />
                <br />

                <label>Descrição</label>
                <input
                    type="text"
                    name="description"
                    id="description"
                    placeholder="Insira a descrição"
                    onChange={getValueInput}
                />
                <br />

                <label>Status</label>
                <input
                    type="text"
                    name="status"
                    id="status"
                    placeholder="Insira o status"
                    onChange={getValueInput}
                />
                <br />

                <button type="submit">Enviar</button>
            </form>
        </>
    )
}

export default Register