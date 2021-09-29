import styles from "./form.module.css"
import useSWR from 'swr'

let formData = {
    Name: "",
    LP: 0,
    SG: 0
}

function compare( a, b ) {
    if ( a.Name < b.Name ){
      return -1;
    }
    if ( a.Name > b.Name ){
      return 1;
    }
    return 0;
  }

const fetcher = (url) => fetch(url).then((res) => res.json())

function nameSelector() {
    // const { data, error } = useSWR('/api/getMembers', fetcher, { refreshInterval: 1 })
    const { data, error } = useSWR('/api/getMembers', fetcher)

    if (error) {
        // console.log(error)
        // console.log(data)
        return <div className={styles.placeholder}>Failed to load Chatuba members from the Database</div>
    }
    if (!data) return <div className={styles.placeholder}>Loading...</div>

    // console.log(data)
    const names = data.filter(
        (member) => member.Name == "Chatuba" ? false : true
    ).map((member) => { return {Name: member.Name, id:member.id} }).sort(compare)
    // console.log(names)

    return (
        <div className={styles.flexChild}>
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

            <div className={styles.flexContainer}>

                <div className={styles.namesContainer}>
                    <div className={styles.flexChild}>Nome:</div>
                    {nameSelector()}
                </div>

                <div className={styles.slidersContainer}>
                    <div className={styles.flexChild}>Lara</div>
                    <div className={styles.flexChildCenter}>
                        <input type="range" name="LP" min="-10" max="10" list="tickmarks1" defaultValue="0" onChange={(event) => { formData.LP=event.target.value, console.log(formData) }} />
                        <datalist id="tickmarks1" className={styles.sliderLabel}>
                            <option value="-10" label="-10"></option>
                            <option value="-9"></option>
                            <option value="-8"></option>
                            <option value="-7"></option>
                            <option value="-6"></option>
                            <option value="-5" label="-5"></option>
                            <option value="-4"></option>
                            <option value="-3"></option>
                            <option value="-2"></option>
                            <option value="-1"></option>
                            <option value="0" label="0"></option>
                            <option value="1"></option>
                            <option value="2"></option>
                            <option value="3"></option>
                            <option value="4"></option>
                            <option value="5" label="5"></option>
                            <option value="6"></option>
                            <option value="7"></option>
                            <option value="8"></option>
                            <option value="9"></option>
                            <option value="10" label="10"></option>
                        </datalist>
                    </div>
                    <div className={styles.flexChild}>Pierri</div>
                </div>

                <div className={styles.slidersContainer}>
                    <div className={styles.flexChild}>Schons</div>
                    <div className={styles.flexChildCenter}>
                        <input name="SG" type="range" min="-10" max="10" list="tickmarks2" defaultValue={formData.SG} onChange={(event) => { formData.SG=event.target.value, console.log(formData) }} />
                        <datalist id="tickmarks2" className={styles.sliderLabel}>
                            <option value="-10" label="-10"></option>
                            <option value="-9"></option>
                            <option value="-8"></option>
                            <option value="-7"></option>
                            <option value="-6"></option>
                            <option value="-5" label="-5"></option>
                            <option value="-4"></option>
                            <option value="-3"></option>
                            <option value="-2"></option>
                            <option value="-1"></option>
                            <option value="0" label="0"></option>
                            <option value="1"></option>
                            <option value="2"></option>
                            <option value="3"></option>
                            <option value="4"></option>
                            <option value="5" label="5"></option>
                            <option value="6"></option>
                            <option value="7"></option>
                            <option value="8"></option>
                            <option value="9"></option>
                            <option value="10" label="10"></option>
                        </datalist>
                    </div>
                    <div className={styles.flexChild}>Gonini</div>
                </div>

                <div className={styles.submitContainer}>
                    <input type="submit"/>
                </div>
            </div>
        </form>
    )
}