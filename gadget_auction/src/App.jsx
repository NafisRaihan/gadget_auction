
import './App.css'
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Items from './components/active-auctions/Items'
import Footer from './components/footer/Footer';
import { FavoritesProvider } from './contexts/FavoritesContext';
import { ToastContainer } from 'react-toastify';



function App() {




  return (
    <FavoritesProvider>
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
          
          <Footer />
        
        <ToastContainer />
      </div>
    </FavoritesProvider>
  )
}

export default App
