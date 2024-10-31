import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nav from "./components/Nav"
import ComposePage from "./pages/ComposePage"
import EmailListPage from "./pages/EmailListPage"
import ViewEmailPage from "./pages/ViewEmailPage"

function App() {
  return (

    <BrowserRouter>
      <div>
          <Nav /> 
      </div>
      <Routes>
        <Route path="/" element={<EmailListPage /> } /> 
        <Route path="/viewemail/:id" element={<ViewEmailPage />} />
        <Route path="/compose"element={<ComposePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App