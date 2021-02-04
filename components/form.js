import React from 'react'
import InputRange from 'react-input-range'
import "react-input-range/lib/css/index.css"
import styles from './layout.module.css'

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            SG: 0,
            LP: 0
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        

        alert('Nova avaliação para ' + this.state.name);
        event.preventDefault();
        this.setState({
            name: "",
            SG: 0,
            LP: 0
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className={styles.form}>
                <label className={styles.form}>
                    Nome:
                    <select name="name" value={this.state.name} required onChange={this.handleInputChange}>
                        <option value="" disabled hidden />
                        <option value="Pierri">Pierri</option>
                        <option value="Gonini">Gonini</option>
                        <option value="Kula">Kula</option>
                    </select>
                    <br />
                </label>
                <label className={styles.form}>
                    <div className={styles.row}>
                        <div className={styles.column}>Schons</div>
                        <div >Gonini</div>
                    </div>
                    <br />
                    <div className={styles.slider}>
                        <InputRange
                        name="SG"
                        minValue={-10}
                        maxValue={10}
                        step={1}
                        value={this.state.SG}
                        onChange={value => this.setState({ SG: value })}
                        onChangeComplete={value => this.setState({ SG: value })}
                        />
                    </div>
                <br />
                </label>

                <label className={styles.form}>
                    <div className={styles.row}>
                        <div className={styles.column}>Lara</div>
                        <div >Pierri</div>
                    </div>
                    <br />
                    <div className={styles.slider}>
                        <InputRange
                        name="LP"
                        minValue={-10}
                        maxValue={10}
                        step={1}
                        value={this.state.LP}
                        onChange={value => this.setState({ LP: value })}
                        onChangeComplete={value => this.setState({ LP: value })}
                        />
                    </div>
                <br />
                </label>

                <input type="submit" value="Enviar" />
            </form>

        );
    }
}