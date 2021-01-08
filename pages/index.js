function Home({ data }) {
    return (
        <>
            <h1>My goals</h1>
            {data.goals.map(goal => (
                <div key={goal._id}>
                    <h2>{goal.name}</h2>
                    <h5>{goal.description}</h5>
                    <h6>{goal.status}</h6>
                </div>
            ))}
        </>
    )
}

export async function getServerSideProps() {
    const response = await fetch(`http://localhost:3333/goals`)
    const data = await response.json()
    return { props: { data } }
}

export default Home