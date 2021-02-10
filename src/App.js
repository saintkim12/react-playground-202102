// import './App.css';
import { useState } from 'react'
import { Provider } from './context'
import ElCodeEditor from './components/ElCodeEditor'
import ElCalendar from './components/ElCalendar'

function App() {
  const [value, setValue] = useState('123')
  return (
    <div className="App">
      <Provider value={{ value, setValue }}>
        <header className="App-header">
          <ElCalendar />
          <ElCodeEditor />
          <button type="button" onClick={() => setValue('test')}>setValue('test')</button>
          <button type="button" onClick={() => setValue('')}>clear data</button>
        </header>
      </Provider>
    </div>
  );
}

export default App;
