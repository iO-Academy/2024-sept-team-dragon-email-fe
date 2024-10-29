import { BrowserRouter, Routes } from "react-router-dom"
import EmailList from "./components/EmailList"
import Nav from "./components/Nav"

function App() {
  return (
    <BrowserRouter>
      <div>
          <Nav />
          <EmailList /> 
      </div>
      <Routes>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App