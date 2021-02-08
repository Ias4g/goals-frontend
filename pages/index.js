import React from 'react'
import { BsExclamationCircleFill } from 'react-icons/bs'
import { AiFillCheckCircle, AiFillDelete } from 'react-icons/ai'
import Head from 'next/head'
import Menu from '../components/Menu'
import Popovers from '../components/Popovers'
import NotFoundDatas from '../components/NotFoundDatas'
import Footer from '../components/Footer'
import {
    Jumbotron,
    Container,
    ListGroup,
    ListGroupItem,
    ListGroupItemHeading,
    ListGroupItemText,
    Badge,
    Button,
} from 'reactstrap'

import { parseISO, format } from 'date-fns'

function Home({ data }) {
    function getFormatDate(dtt) {
        const firstDate = parseISO(dtt)
        const formattedDate = format(
            firstDate, "dd 'de' MMMM 'de' yyyy', às ' HH:mm:ss"
        )
        return formattedDate
    }

    function onBtnDelete() {
        alert('Falta implementar o código para fazer a exclusão da meta')
    }

    return (
        <>
            <Head>
                <title>Home - My Goals</title>
            </Head>
            <Menu />
            <Jumbotron fluid className="home">
                <Container>
                    <h1 className="display-4 text-center title">My goals</h1>
                    {data.goals.length === 0 ? <NotFoundDatas /> :
                        <ListGroup>
                            {data.goals.map(goal => (
                                <div key={goal._id}>
                                    <ListGroupItem className="item-list">
                                        <ListGroupItemHeading className="item-heading">
                                            <div className="item-name">
                                                {goal.name}
                                                <p className="text-muted">
                                                    <b>Criado em:</b> {getFormatDate(goal.createdAt)}
                                                </p>
                                            </div>
                                            <div><Popovers /></div>
                                        </ListGroupItemHeading>
                                        <ListGroupItemText>
                                            {goal.description}
                                        </ListGroupItemText>
                                        <ListGroupItemText className="item-heading">
                                            {goal.status !== "Pendente" ?
                                                <Badge className="actions" color="success" pill>
                                                    <AiFillCheckCircle /> {goal.status}
                                                </Badge>
                                                :
                                                <Badge className="actions" color="warning" pill>
                                                    <BsExclamationCircleFill /> {goal.status}
                                                </Badge>
                                            }
                                            <span className="text-muted">id: {goal._id}</span>
                                            <Button type="button" color="link" className="btn-popover"
                                                onClick={onBtnDelete}>
                                                <AiFillDelete />
                                            </Button>
                                        </ListGroupItemText>
                                    </ListGroupItem>
                                </div>
                            ))}
                        </ListGroup>
                    }
                </Container>
            </Jumbotron>
            <Footer />
        </>
    )
}

export async function getServerSideProps() {
    const response = await fetch(`http://192.168.15.11:3333/goals`)
    const data = await response.json()
    return { props: { data } }
}

export default Home