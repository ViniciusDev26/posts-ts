import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Feed, Login } from "./pages"
import "./styles/global.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/feed" element={<Feed />}/>
        <Route path="*" element={<Login />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
