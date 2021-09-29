import Layout from '../components/layout'
import Form from '../components/form'

const siteTitle = 'Chatuba Compass V3.0'

// import useSWR from 'swr'

// const fetcher = (url) => fetch(url).then((res) => res.json())

// function showVotes() {
//     const {data, error} = useSWR('./api/getMembers', fetcher, { refreshInterval: 1000 })

//     if (error) {
//         console.log(error)
//         console.log(data)
//         return <div>Failed to load</div>
//     }
//     if (!data) return <div> Loading...</div>

//     console.log(data)
//     return <div>Data loaded!</div>
// }

export default function Home() {
    return (
        <Layout siteTitle={siteTitle}>
            
            <Form></Form>

        </Layout>
    )
}