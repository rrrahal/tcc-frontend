import React from 'react'
import { Textarea } from './components/ui/textarea'
import { Header } from './components/ui/header'
import { TitleComponent } from './components/ui/title'
import { SubmitButton } from './components/ui/submit_button'

enum VentureResponse {
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  NOT_STARTED = 'NOT_STARTED',
}

function App() {
  const [ventureDescription, setVentureDescription] = React.useState('')
  const [ventureResponse, setVentureResponse] = React.useState(
    VentureResponse.NOT_STARTED
  )

  return (
    <div className='app min-w-[100vw] min-h-[100vh]'>
      <Header />
      <TitleComponent />
      <div className='TextAreaContainer flex flex-col ml-2'>
        <Textarea
          className='w-1/2  min-w-[400px]'
          setText={setVentureDescription}
          text={ventureDescription === '' ? undefined : ventureDescription}
        />
        <SubmitButton content={ventureDescription} />
      </div>
    </div>
  )
}

export default App
