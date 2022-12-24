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
    // Fragmento de Planet
    <button onClick={showMessage}>Show Message!</button>
```

## Renderização condicional
Algo fundamental é esse conceito, ele basicamente é a exibição de um elemento dependente de uma condição
