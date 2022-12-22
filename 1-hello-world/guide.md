# Hello World do React

## CDN Links
> Adicionamos os links de importação do React no HTML base
```html
    <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
```

#
## Criando a Root
> Criamos uma div com id 'root' para inserir todos elemento React dentro dele
```html
    <div id="root"></div>
```

#
## Como criar um elemento React
> Nós criaremos de forma manual, como o transpilador interpretará e converterá o código jsx em js
```javascript
    ReactDOM.render(
        React.createElement( // Criando um elemento
            'h1',           // Elemento
            null,           // Props
            'Hello World'   // Conteúdo dentro do elemento
        ), 
        document.getElementById('root') // Inserindo dentro da div root
    )
```
> Após isso linkamos o script js no HTML
```html
    <script src="hello-world.js"></script>
```

#
## Executando
> Se abrirmos agora o arquivo HTML, esse será o resultado

![alt text][preview]

[preview]: ./preview.png "Preview do resultado"