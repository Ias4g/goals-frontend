import React from 'react'
import Head from 'next/head'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import {
    Jumbotron,
    Container,
    ListGroup,
    ListGroupItem,
    ListGroupItemHeading,
    ListGroupItemText
} from 'reactstrap'

function Home({ data }) {
    return (
        <>
            <Head>
                <title>Home - My Goals</title>
            </Head>
            <Menu />
            <Jumbotron fluid className="home">
                <Container>
                    <h1 className="display-4 text-center title">My goals</h1>
                    <ListGroup>
                        {data.goals.map(goal => (
                            <div key={goal._id}>
                                <ListGroupItem className="item-list">
                                    <ListGroupItemHeading>
                                        {goal.name}
                                    </ListGroupItemHeading>
                                    <ListGroupItemText>
                                        {goal.description}
                                    </ListGroupItemText>
                                    <ListGroupItemText>
                                        {goal.status}
                                    </ListGroupItemText>
                                </ListGroupItem>
                            </div>
                        ))}
                    </ListGroup>
                </Container>
            </Jumbotron>
            <Footer />
        </>
    )
}

export async function getServerSideProps() {
    const response = await fetch(`http://localhost:3333/goals`)
    const data = await response.json()
    return { props: { data } }
}

export default Home