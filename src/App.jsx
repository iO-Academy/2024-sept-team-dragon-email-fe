import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nav from "./components/Nav"
import EmailListPage from "./pages/EmailListPage"
import ViewEmailPage from "./pages/ViewEmailPage"
import DeletedEmailsPage from "./pages/DeletedEmailsPage"
import SentListPage from "./pages/SentListPage"
import EmailFormPage from "./pages/EmailFormPage"

function App() {
  return (
    <BrowserRouter>
      <div>
          <Nav /> 
      </div>
      <Routes>
        <Route path="/" element={<EmailListPage /> } /> 
        <Route path="/viewemail/:id" element={<ViewEmailPage />} />
        <Route path="/compose"element={<EmailFormPage/>}/>
        <Route path="/sent" element={<SentListPage />}/>
        <Route path="/deleted" element={<DeletedEmailsPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App