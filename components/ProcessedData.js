
export default function ProcessedData({ dbData }) {

    console.log(dbData)

    // const Names = (dbData.map((data) => (
    //     {
    //         name: data.Name,
    //         LP: data.LP,
    //         SG: data.SG,
    //     }
    // )))

    // console.log(Names)

    return (
        <div>
            <ul>
                {dbData.map((data) => (
                    <li key={data.Name}>
                        <h2>{data.Name}</h2>
                        <h3>{data.LP}</h3>
                        <p>{data.SG}</p>
                    </li>
                ))}
            </ul>

        </div>
    )
}