// Creates Form rules and layout

import React from 'react'
import InputRange from 'react-input-range'
import "react-input-range/lib/css/index.css"
import styles from "./form.module.css"

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
        event.preventDefault();

        // Call POST to DB

        alert(
            'Nova avaliação para ' + this.state.name +
            '\nLara-Pierri: ' + this.state.LP +
            '\nSchons-Gonini: ' + this.state.SG
            );

        this.setState({
            name: "",
            SG: 0,
            LP: 0
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>

                <div className={styles.flexContainer}>
                    <div className={styles.namesContainer}>
                        <div className={styles.flexChildLeft}>Nome:</div>
                        <div className={styles.flexChildRight}>
                            <select name="name" value={this.state.name} required onChange={this.handleInputChange}>
                                <option value="" disabled hidden />
                                <option value="Pi">Pierri</option>
                                <option value="Go9">Gonini</option>
                                <option value="Kula">Kulakauskas</option>
                                <option value="Platz">Patzlaff</option>
                                <option value="Teteu">Mateus</option>
                                <option value="Maria Gadu">Freire</option>
                                <option value="Liston">Liston</option>
                                <option value="Luisotavio">Luis Otavio</option>
                                <option value="Bravo">Bravo</option>
                                <option value="Chris">Baggio</option>
                                <option value="Caça">Caçador</option>
                                <option value="Caio">Caio</option>
                                <option value="Lilias">Elias</option>
                                <option value="Brunin">Bruninho</option>
                                <option value="Alison">Alison</option>
                                <option value="Broni">Barni</option>
                            </select>
                        </div>
                    </div>

                    <div className={styles.slidersContainer}>
                        <div className={styles.flexChildLeft}>Lara</div>
                        <div className={styles.flexChildCenter}>
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
                        <div className={styles.flexChildRight}>Pierri</div>
                    </div>

                    <div className={styles.slidersContainer}>
                        <div className={styles.flexChildLeft}>Schons</div>
                        <div className={styles.flexChildCenter}>
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
                        <div className={styles.flexChildRight}>Gonini</div>
                    </div>

                    <div className={styles.submitContainer}>
                        <input type="submit" value="Enviar" />
                    </div>
                </div>  
            </form>

        );
    }
}

export function pickColor({ par }) {
    var color;
    par === 'backgroundColor' ?
      color = 'rgba(' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ',0.05)'
      :
      color = 'rgba(' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ',1)'
    return color
  }