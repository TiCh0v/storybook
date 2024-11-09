
import './App.css'
import Button from './components/Button/Button'

function App() {


  return (
    <>
      <div>
        Test storybook
      </div>
      <div className='button-container'>
        <Button label='button'/>
        <Button label='button' variant='secondary'/>
        <Button label='button' variant='outline'/>
      </div>
    </>
  )
}

export default App
