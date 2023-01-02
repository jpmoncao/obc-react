# Ciclo de vida

## Você pode monitorar durante 3 fases
> Mounting: Quando um elemento é colocado no DOM

> Updating: Quano um componente é atualizado

> Unmounting: Quando um elemento é removido do DOM

#
## Incluindo LifeCycle no nosso component
```js
    import React, { Fragment, useState, useEffect } from 'react'
    import { Planet } from './planet'

    async function getPlanets() {
        await fetch('http://localhost:3000/api/planets.json')
            .then(response => {
                let data = response.json()
                console.log(data)
                return data
            })
            .catch(
                reason => console.info(reason)
            )
    }

    export const Planets = () => {
        const [planets, setPlanets] = useState([])

        useEffect(() => {
            getPlanets().then(data => {
                setPlanets(data['planets'])
            })
        }, [])

        const removeLast = () => {
            let newPlanets = [...planets]
            newPlanets.pop()
            setPlanets(newPlanets)
        }

        const duplicateLast = () => {
            let lastPlanet = planets[planets.length - 1]
            let newPlanets = [...planets, lastPlanet]
            setPlanets(newPlanets)
        }

        return (
            <Fragment>
                <h3>Planet List</h3>
                <button onClick={removeLast}>Remove Last</button>
                <button onClick={duplicateLast}>Duplicate Last Planet</button>
                <hr />
                {planets.map((planet) =>
                    <Planet
                        name={planet.name}
                        desc={planet.desc}
                        imgUrl={planet.imgUrl}
                        descUrl={planet.descUrl}
                    />
                )}
            </Fragment>
        )
    }
```