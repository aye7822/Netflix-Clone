import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import RowPost from './components/RowPost/RowPost'
import {originals,action,comedy,romance,horror,documentry} from './Urls.jsx'


function App() {
  return (
    <div className='App' >
      <Navbar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals' />
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={comedy} title='Comedy' isSmall />
      <RowPost url={horror} title='Horror' isSmall />
      <RowPost url={romance} title='Romance' isSmall />
      <RowPost url={documentry} title='Documentry' isSmall />
    </div>
  )
}

export default App