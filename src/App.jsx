import { BrowserRouter, Route, Routes } from "react-router-dom"
import EmailList from "./components/EmailList"
import Nav from "./components/Nav"
import ViewEmail from "./pages/ViewEmail"

function App() {
  return (
    <BrowserRouter>
      <div>
          <Nav />
          
      </div>
      <Routes>
        <Route path="/" element={<EmailList /> } /> 
        <Route path="/viewemail" element={ <ViewEmail />} />
      
      </Routes>
    </BrowserRouter>
  )
}

export default App