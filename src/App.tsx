import React from 'react'
import { Header } from './components/ui/header'
import { Description } from './components/ui/description'
import { Map } from './components/map'
import { data } from './data/map_data'
import { words_data } from './data/words'
import CountriesData from './data/countries.json'
import { Lollipop } from './components/vis/lollipop'
import { Barplot } from './components/vis/barchar'
import { bar_data } from './data/bar_chart'

export enum SelectedView {
  VentureModel,
  DataViz
}

function App() {
  const [selectedView, setSelectedView] = React.useState(SelectedView.VentureModel)

  const viz = (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      <Map width={900} height={500} data={data} countries={CountriesData} />
      <Lollipop width={700} height={800} data={words_data} />
      <Barplot width={700} height={1000} data={bar_data} />
    </div>
  )


  return (
    <div className='app min-w-[100vw] min-h-[100vh]'>
      <Header setSelectedView={setSelectedView} />
      {selectedView === SelectedView.VentureModel ? <Description /> : viz}
    </div>
  )
}

export default App
