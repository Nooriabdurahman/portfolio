import './App.css'
import Hero from './component/hero/hero'
import Protfolio from './component/portfolio/protfolio'
import Services from './component/services/services'
// import Test from './component/services/Test'


function App() {
 
  return (
    <>
    {/* <div> */}
    <div className='max-w-[1538px]  ml-auto mr-auto '>
      <section  className='h-screen ' id='hero'>
      <Hero/>
      </section>
      <section className='h-screen ' id='services'>
      <Services/>
      </section>
      <section className='h-screen ' id='protfolio'>
        <Protfolio/>
      </section>
      
      {/* <Test/> */}
    </div>
    </>
  )
}

export default App
  