import { BrowserRouter, Route, Routes } from "react-router-dom"
import EmailList from "./components/EmailList"
import Nav from "./components/Nav"
import ComposePage from "./pages/ComposePage"

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/compose"element={<ComposePage/>}/>
     
      </Routes>
      <Nav />
      <EmailList /> 
      </BrowserRouter>
    </div>
  )
}

export default App