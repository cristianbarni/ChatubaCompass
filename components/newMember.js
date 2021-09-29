import styles from './form.module.css'

export default function NewMember() {
    return (
        <form action='/api/newMember' className={styles.newMember}>
            <div >Sugerir novo nome:</div>
            <input type='text' name='Name' className={styles.flexChild}></input>
            <input type='submit' />
        </form>
    )
}