import React, { Fragment } from 'react'
import { Planet } from './planet'

export class Planets extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            planets: [
                {
                    name: 'Mercúrio',
                    desc: 'Mercúrio é o menor e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar. Mercúrio completa três rotações em torno de seu eixo a cada duas órbitas.',
                    descUrl: 'https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)',
                    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg',
                },
                {
                    name: 'Plutão',
                    desc: 'Plutão, formalmente designado 134340 Plutão (símbolos: ⯓ e ♇) é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol. Originalmente classificado como um planeta, Plutão é atualmente o maior membro conhecido do cinturão de Kuiper,[11] uma região de corpos além da órbita de Netuno.',
                    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/280px-Pluto_in_True_Color_-_High-Res.jpg',
                },
                {
                    name: 'Terra',
                    desc: 'A Terra é o terceiro planeta mais próximo do Sol, o mais denso e o quinto maior dos oito planetas do Sistema Solar. É também o maior dos quatro planetas telúricos. É por vezes designada como Mundo ou Planeta Azul. Lar de milhões de espécies de seres vivos,[13] incluindo os humanos, a Terra é o único corpo celeste onde é conhecida a existência de vida. O planeta formou-se há 4,56 bilhões de anos,[14][15][16][17] e a vida surgiu na sua superfície um bilhão de anos depois.',
                    descUrl: 'https://pt.wikipedia.org/wiki/Terra',
                    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/300px-The_Blue_Marble_%28remastered%29.jpg',
                }
            ]
        }
    }

    removeLast = () => {
        let newPlanets = [...this.state.planets]
        newPlanets.pop()
        this.setState(state => ({
            planets: newPlanets
        }))
    }

    duplicateLast = () => {
        let lastPlanet = this.state.planets[this.state.planets.length - 1]
        this.setState(state => ({
            planets: [...this.state.planets, lastPlanet]
        }))
    }

    render() {
        return (
            <Fragment>
                <h3>Planet List</h3>
                <button onClick={this.removeLast}>Remove Last</button>
                <button onClick={this.duplicateLast}>Duplicate Last</button>

                {
                    this.state.planets.map(planet =>
                        <Planet
                            name={planet.name}
                            desc={planet.desc}
                            descUrl={planet.descUrl}
                            imgUrl={planet.imgUrl}
                        />
                    )
                }


            </Fragment>
        )
    }
}