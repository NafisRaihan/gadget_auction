
import './App.css'

import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Items from './components/active-auctions/Items'



function App() {




  return (
    <div className="min-h-screen bg-white">
      <section>
        <Navbar></Navbar>
      </section>
        <div>
          <Hero></Hero>
        </div>
        <div>
         <Items></Items>
        </div>
      
    </div>
  )
}

export default App
