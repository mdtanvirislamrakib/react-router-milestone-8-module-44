import React, { Suspense } from 'react'
import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/Navbar/Navbar'
import PricingOptions from './components/PricingOptions/PricingOptions'


const pricingPrimise = fetch('pricingData.json').then(res => res.json())

function App() {

  return (
    <>
      <header>
        <Navbar />
        {/* <DaisyNav /> */}
      </header>

      <main>
        
        <Suspense fallback = {<span className="loading loading-spinner loading-xl"></span>}>
          <PricingOptions pricingPrimise = {pricingPrimise}></PricingOptions>
        </Suspense>
      </main>
    </>
  )
}

export default App
