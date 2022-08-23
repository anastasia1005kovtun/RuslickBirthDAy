import React from 'react';
import Confetti from 'react-confetti'
import {ForRuslick} from "./pages/ForRuslick";


function App() {

  return (
        <div className="app">
            {/*<Todos/>*/}
            <ForRuslick/>

          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}/>
        </div>
    );
}

export default App;
