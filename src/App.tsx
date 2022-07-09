import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AuthProvider } from "./contexts/AuthContext";
import { Feed, Login } from "./pages"
import { MakeServer } from "./server"
import "./styles/global.css"

if(process.env.NODE_ENV === "development") MakeServer.runServer();

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/feed" element={<Feed />}/>
          <Route path="*" element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
