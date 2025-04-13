import React, { Suspense } from 'react'
import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/Navbar/Navbar'
import PricingOptions from './components/PricingOptions/PricingOptions'
import ResultChart from './components/ResultChart/ResultChart'
import axios from 'axios'
import MarksChart from './components/MarksCharts/MarksChart'


const pricingPrimise = fetch('pricingData.json').then(res => res.json())
const marksPromise = axios.get('MarkData.json')

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


        <ResultChart></ResultChart>

        <Suspense fallback = {<span className="loading loading-spinner loading-xl"></span>}>
          <MarksChart marksPromise = {marksPromise}></MarksChart>
        </Suspense>
      </main>
    </>
  )
}

export default App
