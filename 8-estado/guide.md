# Estados do React

## O que são estados?
* State é um objeto javascript que guarda os dados de um component e determina seu comportamento.

* Quando um estado é atualizado o component é re-renderizado.

#
## Diferença entre props e state
> Props: são declaradas por outros components

> State: são declarados pelo próprio component

#
## Component classe x funcional
* Algum tempo atrás apenas os components por classe poderiam usar os states
* Isso acabou com a chegada dos hooks, permitindo o uso também nos components funcionais

> Para criar um state em um component de classe, usamos:
```js
    // Criando
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    // Manipulando
    incrementCount() {
        this.setState(state => {
            return {count: state.count + 1}
        })
    }
```
> Já no component funcional:
```js
    // Criando
    import React, { useState } from 'react';

    const [count, setCount] = useState(0)
    // Manipulando
    setCount(count++)
```