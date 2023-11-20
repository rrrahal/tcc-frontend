import React from 'react'
import { Header } from './components/ui/header'
import { Description } from './components/ui/description'
import { Map } from './components/map'
import { data } from './data/map_data'
import CountriesData from './data/countries.json'

export enum SelectedView {
  VentureModel,
  DataViz
}

function App() {
  const [selectedView, setSelectedView] = React.useState(SelectedView.VentureModel)

  return (
    <div className='app min-w-[100vw] min-h-[100vh]'>
      <Header setSelectedView={setSelectedView} />
      {selectedView === SelectedView.VentureModel ? <Description /> : <Map width={700} height={400} data={data} countries={CountriesData} />}
    </div>
  )
}

export default App
