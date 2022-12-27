# Renderizando múltiplos components

## Utilizando Arrays
Invés de inserirmos vários components, podemos usar um Array. Até mesmo inserindo a quantidade de components de forma dinâmica.

> Nesse caso usamos um Array 'names' para mapear os itens e imprimir como satélite
```js
    const names = ['a', 'b', 'c', 'd', 'e', 'f']
    const satellites = names.map(name => <li>Satélite {name}</li>)
```
> No return, aplicaremos assim:
```js
    <h4>Satélites</h4>
    <ul>
        {satellites}
    </ul>
```
> Podemos também, fazer o mapeamento direto na lista não-ordenada
