import { connectToDatabase } from '../util/mongodb'
import ProcessedData from '../components/ProcessedData'
import Layout from '../components/layout'
import Form from '../components/form'

export default function Home({ isConnected, dbData }) {
  return (
    <Layout>

    <Form />


    <ProcessedData dbData={dbData} />

    </Layout>
  )
}

export async function getServerSideProps(context) {
  const { client, db } = await connectToDatabase()

  const isConnected = await client.isConnected()

  const data = await db
        .collection('Data')
        .find({})
        .sort({})
        .toArray();

  return {
    props: { 
      isConnected,
      dbData: JSON.parse(JSON.stringify(data))
    },
  }
}
