import Header from '../components/Header'
import Main from '../components/Main'
import { useState } from 'react'
export default function Home() {
  const [select, setSelect] = useState(null)
  return (
    <div className="min-w-screen min-h-screen bg-gray-400 flex overflow-hidden">
      <Header selected={setSelect}/>
      <Main selection={select}/>
    </div>
  )
}
