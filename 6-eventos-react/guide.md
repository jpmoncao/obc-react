# Eventos no React

## Vamos criar nosso primeiro evento no React
> Criaremos uma função que será executada ao clicar um botão, assim como no JavaScript comum
```javascript
    // Fragmento de Planet
    const showMessage = () => {
        console.log('Meu primeiro evento!')
    }
```
> Essa função será executada no evento 'onClick' de um botão
```html
    <!-- Fragmento de Planet -->
    <button onClick={showMessage}>Show Message!</button>
```

# Renderização condicional
Algo fundamental é esse conceito, ele basicamente é a exibição de um elemento dependente de uma condição
> Para esse projeto, criaremos uma condição baseada se o link da descrição foi passado ou não. Caso não, o elemento do link será anulado.
```javascript
    // DescriptionWithLink
    import React, { Fragment } from 'react'

    export const DescriptionWithLink = props => {
        if (props.descUrl) {
            return (
                <Fragment>
                    <p>{props.text}</p>
                    <p>
                        <a href={props.descUrl}>Confira mais</a>
                    </p>
                </Fragment>
            )
        } else {
            return (
                <Fragment>
                    <p>{props.text}</p>
                </Fragment>
            )
        }
    }
```

> Podemos ainda, usar outra forma de procesamento, criando uma variável contendo um elemento e ajustando de acordo com a condição
```js
    // Planet
    export const Planet = props => {
    let title
    
    if(props.titleWithUnderline)
        title = <u><h4>{props.name}</h4></u>
    else
        title = <h4>{props.name}</h4>

    return (
        <div>
            <hr />
            {title}
            <DescriptionWithLink text={props.desc} descUrl={props.descUrl}/> <br/>
            <GrayImg imgUrl={props.imgUrl} />
        </div>
    )
}
```

> Na estilização, podemos usar um operador condicional ternário e manipular as classes
```js 
    // Fragmento de GrayImg
    <Fragment>
        <img className={props.gray ? 'gray-image' : 'color-image'} src={props.imgUrl} />
    </Fragment>
```