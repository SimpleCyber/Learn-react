import './App.css';
import Accordion from "./components/accordion/index.jsx"
import RandomColor from "./components/generateRandomColor/index.jsx"

import Rating from './components/rating/index.jsx';


function App() {
  return (
    <div className="App">
      {/* 1. Accordion Component */}
      <Accordion />

      {/* 2. Random color */}
      <RandomColor />

      {/* 3. rating */}
      <Rating noOfStarts={5} />


    </div>
  );
}

export default App;
