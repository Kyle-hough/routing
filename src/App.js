import React from 'react';
import {BrowserRouter, Switch, Route, useParams} from 'react-router-dom';
import Keyword from './components/Keyword'


const Home = () => {
  return (
    <div>Welcome</div>
  )
}

const Error = () => {
  return (
    <div>Error</div>
  )
}

const Number = () => {
  const {number} = useParams();
  if (isNaN(+number)) { 
  return (
    <div>
      <p>The Word is: {number}</p>
    </div>
  )
} else {
  return (
    <div>
        <p>The Number is: {number}</p>
      </div>
    )
  }
}

// const Keyword = () => {
//   const {keyword, color, background} = useParams();
//   const history = useHistory()
//   const redirect =() =>{
//     history.push("/home")
//   }

//   return (
//     <div>
//         <p style={{color: color, backgroundColor: background}}>The Word is: {keyword} </p>
//         <button onClick={redirect}>Return to home</button>
//     </div>
//   )
// }


function App() {
  return (
    <BrowserRouter>

    <Switch>
      <Route exact path="/Home"> <Home />
      </Route>
      <Route exact path="/:number"><Number /> 
      </Route>
      <Route exact path="/:keyword/:color/:background"><Keyword />
      </Route>
      <Route path="/"><Error />
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
