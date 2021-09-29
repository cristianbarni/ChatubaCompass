import styles from "./form.module.css"
import useSWR from 'swr'

let formData = {
    Name: "",
    LP: "0",
    SG: "0"
}

const fetcher = (url) => fetch(url).then((res) => res.json())

function nameSelector() {
    const { data, error } = useSWR('/api/getMembers', fetcher, { refreshInterval: 1 })

    if (error) {
        // console.log(error)
        // console.log(data)
        return <div>Failed to load</div>
    }
    if (!data) return <div> Loading...</div>

    // console.log(data)
    const names = data.map((member) => { return {Name: member.Name, id:member.id} })
    // console.log(names)

    return (
        <div>
            <select name="Name" defaultValue={formData.Name} required onChange={(event) => { formData.Name=event.target.value, console.log(formData) }}>
                <option value="" disabled hidden />
                {names.map((name) => (
                    <option value={name.Name} key={name.id}>{name.Name}</option>
                ))}
            </select>
        </div>
    )
}

export default function Form() {
    return (
        <form action='/api/writeVotes'>
            <div className="forms">
                {/* Div do name selector */}
                <div>
                    <div>Nome:</div>
                    {nameSelector()}
                </div>

                {/* Div do range slider LP */}
                <div>
                    <div>Lara</div>
                    <div>
                        <input name="LP" type="range" min="-10" max="10" defaultValue={formData.LP} onChange={(event) => { formData.LP=event.target.value, console.log(formData) }} />
                    </div>
                    <div>Pierri</div>
                </div>

                {/* Div do range slider SG */}
                <div>
                    <div>Schons</div>
                    <div>
                        <input name="SG" type="range" min="-10" max="10" defaultValue={formData.SG} onChange={(event) => { formData.SG=event.target.value, console.log(formData) }} />
                    </div>
                    <div>Gonini</div>
                </div>

                {/* Div do Enviar */}
                <div>
                    <input type="submit"/>
                </div>
            </div>
        </form>
    )
}