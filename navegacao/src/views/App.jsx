import './App.css'
import React from "react"
import { BrowserRouter as Router} from 'react-router-dom'
import Menu from '/workspace/pw-navegacao/navegacao/src/layout/Menu.jsx'
import Content from '/workspace/pw-navegacao/navegacao/src/layout/Content'


const App = props => (
    <div className="App">
        <Router>
            <Menu />
            <Content />
        </Router>
    </div>
)

export default App