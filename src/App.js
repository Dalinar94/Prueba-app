import React, {useEffect,useState} from 'react';
import './App.css';
const GIFS = 
[
'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaG1jZTN4NTMyb2prNzZhYm5vNXUwbGFwaHY0ZW1xanFhbXFvc21obiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WOGyW1zONpVHpMBbtl/giphy.gif',
'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnA2b25pODh6cWxqazlnem9wNnNvZjBrcjQzemxjbTdqeTAyazJ0biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gIwoiPd7e8bsck8RJ0/giphy.gif'
]
function App() {
  const [gifs, setGifs] =  useState(GIFS)
  
  const DIFFERENTS_GIFS = ['https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWNyZ3cxOTB2dzd2cm5uZGJ4OWRhajdsbThyczV4N3Rlcnhid3BwdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dVtyXloxyUMMyFEG5Z/giphy.gif']
  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGif => <img src={singleGif}/>)
        }
        <button onClick={() => setGifs(DIFFERENTS_GIFS)}>Cambiar GIF</button>
      </section>
    </div>
  );
}

export default App;
