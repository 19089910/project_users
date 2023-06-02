import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import Users from "./pages/Users";

function App(){
//exact => e igual ao um await, para ler toda a url
//Route => recebe os parametros path e component, que sao a url e o que a url entra... 
//o "/" indica o endereço do site EX: http: //localhost:3000 ou ate https ://www.mindmeister.com
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/usuarios" element ={<Users/>}/>
            </Routes>
        </Router>
    )
}
export default App