
import './App.css';
import Exercises from './components/exercises/Exercises';
import Header from './components/header/Header';
import {ExerciseContextProvider} from './context/ExerciseContext';

function App() {
  return (
    <ExerciseContextProvider>
    <div className="App">
        <Header/>
        <div className="main">
        <Exercises/>
        </div>
    </div>
    </ExerciseContextProvider>
  );
}

export default App;
