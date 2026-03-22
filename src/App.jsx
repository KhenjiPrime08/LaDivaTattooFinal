import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import AppRoutes from './routes/AppRoutes'
import { Analytics } from "@vercel/analytics/react"


function App() {
  
  return (

    <section>
          <Header />
            <main>
              <AppRoutes/>
            </main>
          <Footer />
          <Analytics />
    </section>
    
  )
}

export default App
