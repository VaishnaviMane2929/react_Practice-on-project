import React, { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Demo from './demo.jsx'

function MyApp() {
    return(
        <div>
            <h1>this is custom react</h1>
        </div>
    )

}

const ReactElement= {
    type: 'a',
    props:{
        href: 'https://google.com',
        terget: '_blank'

    },
    Children:' hello this use the custom react '
}

const anotherElement=(
    <a href="https://google.com"> visit google</a>

)

const reactElement=  React.createElement(
    'a',
    {href:'https://google.com',terget: '_blank'}, 'click and visit the google'
    
)


ReactDom.createRoot(document.getElementById('root')).render(
  
    reactElement
  
)
