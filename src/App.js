import MCUShows from "./mcu-shows/MCUShows";
import {useEffect, useState} from 'react';

const releaseDates = {
  wandaVision: 'January 2021',
  falconWinter: 'March 2021',
  loki: 'June 2021',
  whatIf: 'August 2021',
  hawkeye: 'November 2021'
 }

 const mcuCharacters = [
  'Scarlet Witch',
  'Vision',
  'Falcon',
  'Winter Soldier',
  'Loki',
  'The Watcher',
  'Hawkeye'
 ];

function App() {
  const [index, setIndex] = useState(0);

  const [num, setNum] = useState(0);

  useEffect(() => {
    alert("The Next MCU Character has been displayed");
  }, [num]);

function newIndex(){
  const randomIndex = Math.floor(Math.random() * mcuCharacters.length);
  setIndex(randomIndex);
}

function newNum(){
  let nextNum = num + 1;
  if (num < mcuCharacters.length - 1){
    setNum(nextNum);
  } else {
    setNum(nextNum = 0);
  }
}

  return (
    <div>
      <h1>FINAL REACT EXERCISE</h1>
      <MCUShows dates={releaseDates} indexTwo={newIndex} numTwo={newNum}/>
      <h1>Random MCU Character: {mcuCharacters[index]}</h1>
      <h1>Next MCU Character: {mcuCharacters[num]}</h1>
    </div>
  );
}

export default App;
