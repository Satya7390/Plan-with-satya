import React, { useState } from "react";
import "./App.css";
import data from './data';
import Tours from "./components/Tours"
import Footer from "./components/Footer";

function App() {

  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTour = tours.filter(tour => tour.id !== id);
    setTours(newTour);
  }

  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h2 className="endPage">No Tours Left</h2>
        <button className="btn-white" onClick={() => setTours(data)}>Refresh</button>
      </div>
    )
  }

  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour}></Tours>
      <Footer />
    </div>
  );
}


export default App;





