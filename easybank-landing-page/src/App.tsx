import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HeaderProvider } from "./context/HeaderContext"
import { HomeProvider } from "./context/HomeContext"

import Header from "./components/Header"
import Footer from "./components/Footer"

import Home from "./pages/Home"



function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderProvider>
          <Header />
        </HeaderProvider>

        <HomeProvider>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </HomeProvider>
        
        <Footer />
      </BrowserRouter>
    </>
  )
}
export default App
