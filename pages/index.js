import { connectToDatabase } from '../util/mongodb'
import ProcessedData from '../components/ProcessedData'
import Layout from '../components/layout'
import Form from '../components/form'
import Plot from '../components/plot'

// const data = {
//   datasets: [
    
//     {
//       label: 'jan',
//       backgroundColor: 'rgba(75,192,192,0.4)',
//       borderColor: 'rgba(75,192,192,1)',
//       data: [{x:5,y:1,r:20}]
//     },
//     {
//       label: 'feb',
//       backgroundColor: 'rgba(75,20,192,0.4)',
//       borderColor: 'rgba(75,20,192,1)',
//       data: [{x:7,y:1,r:20}]
//     }
//   ]
// };

export default function Home({ isConnected, dbData }) {
  return (
    <Layout>

    <Form />

    {/* <ProcessedData dbData={dbData} /> */}

    <Plot dbData={dbData} />

    </Layout>
  )
}

export async function getServerSideProps() {
  const { client, db } = await connectToDatabase()

  const isConnected = await client.isConnected()

  const data = await db
        .collection('Data')
        .find({})
        .toArray();

  return {
    props: { 
      isConnected,
      dbData: JSON.parse(JSON.stringify(data))
    },
  }
}