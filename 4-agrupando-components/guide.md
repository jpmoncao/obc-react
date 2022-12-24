# Components

## Criando component dentro de outros components
> Se nós criarmos um component Planets, dessa forma:
```javascript
    // Planets.js
    import React, { Fragment } from 'react'

    export const Planets = () => {
        return (
            <Fragment> {/* Uma div que não interfere na build do HTML */}
                <h3>Planet List</h3>
                
            </Fragment>
        )
    }
```
> E posteriormente, outro component chamado Planet:
```javascript
    // Planet.js
    import React from 'react'


    export const Planet = () => {
    return (
        <div>
            <h4>Mercúrio</h4>
            <p>Mercúrio é o menor e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar. Mercúrio completa três rotações em torno de seu eixo a cada duas órbitas.</p>
        </div>
    )
}
```

> Podemos agrupá-los, colocando o component Planet, dentro de Planets:
```javascript
    // Planets.js
    import React, { Fragment } from 'react'
    import { Planet } from './planet'

    export const Planets = () => {
        return (
            <Fragment>
                <h3>Planet List</h3>
                <hr />
                <Planet />
                <hr />
                <Planet />
                <hr />
                <Planet />
            </Fragment>
        )
    }
```

#
## Components compartilhados
> Em uma pasta shared, dentro de components (src/components/shared), criaremos um component para imagens dos planetas:
```javascript
    import React, { Fragment } from 'react'
    import './style.css' // Atribui filtro preto e branco na classe 'gray-image'

    export const GrayImg = () => {
        return (
            <Fragment>
                <img class='gray-image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg' />
            </Fragment>
        )
    }
```