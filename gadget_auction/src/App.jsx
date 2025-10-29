
import './App.css'

import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Table from './components/active-auctions/Table';

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
          <Table></Table>
        </div>
      
    </div>
  )
}

export default App
