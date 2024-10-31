import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nav from "./components/Nav"
import ComposePage from "./pages/ComposePage"
import SentPage from "./pages/SentPage"
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
        <Route path="/sent" element={<SentPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App