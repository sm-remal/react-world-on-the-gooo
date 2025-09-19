import { Suspense } from 'react';
import './App.css'
import Countries from './components/Countries/Countries'

function App() {
    const countries = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/all");
    return res.json()
  
  }

  return (
    <>
      <Suspense fallback = {<h2>Loading...</h2>}>
        <Countries countries = {countries()}></Countries>
      </Suspense>
    </>
  )
}

export default App
