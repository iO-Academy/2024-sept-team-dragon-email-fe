import { BrowserRouter, Route, Routes } from "react-router-dom"
import EmailList from "./pages/EmailList"
import Nav from "./components/Nav"

function App() {
  return (
    <BrowserRouter>
      <div>
          <Nav />
          
      </div>
      <Routes>
        <Route path="/" element={<EmailList /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App