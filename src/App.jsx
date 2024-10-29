import { BrowserRouter, Route, Routes } from "react-router-dom"
import EmailList from "./components/EmailList"
import Nav from "./components/Nav"
import ComposePage from "./pages/ComposePage"
import HomePage from "./pages/HomePage"

function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav />
      <Routes>
      <Route path="/"element={<HomePage/>}/>
      <Route path="/compose"element={<ComposePage/>}/>
      
     
      </Routes>
     
     
      </BrowserRouter>
    </div>
  )
}

export default App