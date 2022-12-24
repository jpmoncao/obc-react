# Criando o primeiro projeto React com NPM

## Comandos
> IMPORTANTE: Para criar o projeto React dessa forma é necessário a instalação do Node em sua máquina
```
    npx create-react-app my-first-app
```
#
## Conhecendo a estrutura do framework
Logo de cara encontramos três diretórios, vamos entender:
> NODE_MODULES: Onde todos pacotes necessários são armazenados, incluindo a biblioteca React

> PUBLIC: Arquivos públicos, incluindo o index.html

> SRC: Pasta source, onde a magia e manipulação acontece ^^

#
## Rodando o servidor
> Para rodar o server do nosso projeto, basta digitar o script de start que está no arquivo package.json.
```
    npm start
```
OU
```
    npm run start
```

#
## Criando nosso primeiro component
> Vamos criar um component de Hello World, no nosso App.js
```javascript
    function HelloWorld() {
        return <h1>Hello World</h1>
    }

    function App() {
        return (
            <div>
                <HelloWorld/>
            </div>
        );
    }

    export default App;
```
> Podemos criar também, components externos, então em um arquivo chamado Hello.js insirimos a função HelloWorld() e a exportamos
```javascript
    // Hello.js
    import React from 'react'

    function Hello() {
        return <h1>Hello World</h1>
    }

    export default Hello
```
```javascript
    // App.js
    import React from 'react'
    import Hello from './Hello'

    function App() {
        return (
            <div>
                <Hello/>
            </div>
        );
    }

    export default App;
```
> Nosso components, ainda podem ser Arrow Functions, como nesse caso
```javascript
    // Hello.js
    import React from 'react'

    const Hello = () => {
        return <h1>Hello World</h1>
    }

    export default Hello
```

> E por final, o component feito por Classes
```javascript
    // Hello.js
    import React from 'react'

    class Hello extends React.Component {
        render() {
            return <h1>Hello World</h1>
        }
    }

    export default Hello
```
