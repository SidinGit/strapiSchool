import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { EventsProvider } from "./context/EventsContext"
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import HomePage from "./pages/HomePage"
import "./index.css"
import "@fontsource/playfair-display";
import "@fontsource/poppins";

const App = () => {
  return (
    <EventsProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </EventsProvider>
  )
}

export default App

