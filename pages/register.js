import React, { useState } from 'react'
import Head from 'next/head'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import {
    Jumbotron,
    Container,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Alert
} from 'reactstrap'

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

        setMsg({ formSave: true })

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
                message: 'Erro ao salvar dados'
            })
        }
    }

    return (
        <>
            <Head>
                <title>Register - My Goals</title>
            </Head>
            <Menu />
            <Jumbotron fluid className="form">
                <Container>
                    <h1 className="display-4 text-center">Register my goals</h1>
                    <hr />

                    {msg.type === 'error' ? <Alert className="text-center" color="danger">{msg.message}</Alert> : ""}
                    {msg.type === 'success' ? <Alert className="text-center" color="success">{msg.message}</Alert> : ""}

                    <Form onSubmit={getSendForm}>
                        <FormGroup>
                            <Label for="name">Nome</Label>
                            <Input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Insira seu nome"
                                onChange={getValueInput}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="description">Descrição</Label>
                            <Input
                                type="textarea"
                                name="description"
                                id="description"
                                placeholder="Insira sua descrição"
                                onChange={getValueInput}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="status">Status</Label>
                            <Input
                                type="text"
                                name="status"
                                id="status"
                                placeholder="Insira seu status"
                                onChange={getValueInput}
                            />
                        </FormGroup>

                        {msg.formSave
                            ? <Button type="submit" color="danger" disabled>Enviando...</Button>
                            : <Button type="submit" outline color="primary">Enviar</Button>
                        }
                    </Form>
                </Container>
            </Jumbotron>
            <Footer />
        </>
    )
}

export default Register