import './App.css';
import Accordion from "./components/accordion/index.jsx"
import RandomColor from "./components/generateRandomColor/index.jsx"
import Rating from './components/rating/index.jsx';
import ImageSlider from './components/imageSlider/index.jsx';
import LoadMore from './components/load-more/index.jsx';


function App() {
  return (
    <div className="App">
      {/* 1. Accordion Component */}
      <Accordion />

      {/* 2. Random color */}
      <RandomColor />

      {/* 3. rating */}
      <Rating noOfStarts={5} />

      {/* 4. image Slider */}
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={"10"} page={"12"} />

      {/* 5. Load more */}
      <LoadMore />



    </div>
  );
}

export default App;
