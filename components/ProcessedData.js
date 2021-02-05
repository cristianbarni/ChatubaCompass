
export default function ProcessedData({ dbData }) {

    return (
        <div>
            <ul>
                {dbData.map((data) => (
                    <li key={data.Name}>
                        <h2>{data.Name}</h2><p>LP: {data.LP}</p><p>SG: {data.SG}</p><p>Votes: {data.Votes}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}