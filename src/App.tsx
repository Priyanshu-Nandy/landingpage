import Nav from './components/nav/Nav'
import Hero from './components/hero/Hero'
import Dashboard from './components/Dashboard/Dashboard'
import ProductDesc from './components/ProductDesc/ProductDesc'
const App = () => {
  return (
    <>
    <div className='full-page'>
      <Nav/>
      <Hero/>
    </div>
    <div className='full-page'>
      <Dashboard/>
    </div>
    <ProductDesc/>
    </>
    
  )
}

export default App