import Layout from '../components/layout'
import Form from '../components/form'
import Plot from '../components/plot'

const siteTitle = 'Chatuba Compass V3.0'

export default function Home() {
    return (
        <Layout siteTitle={siteTitle}>
            
            <Form/>
            <Plot/>

        </Layout>
    )
}