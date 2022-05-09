const React = require ('react')
const Default = require ('./layouts/Default')

function error404 ({bread}) {
        return (
            <Default>
                <h2>404</h2>
                <h3>Looks like there's nothing here...</h3>
                <li><a href="/breads">Go home</a></li>
            </Default>
        )
}

module.exports = error404