import { BrowserRouter, Route, Routes } from "react-router-dom"
import EmailList from "./components/EmailList"
import Nav from "./components/Nav"
import ViewEmail from "./pages/ViewEmail"
import ComposePage from "./pages/ComposePage"



function App() {
  return (
    <BrowserRouter>
      <div>
          <Nav />
          
      </div>
      <Routes>
        <Route path="/" element={<EmailList /> } /> 
        <Route path="/viewemail" element={<ViewEmail />} />
        <Route path="/compose"element={<ComposePage/>}/>
      
      
      </Routes>
    </BrowserRouter>
  )
}

export default App