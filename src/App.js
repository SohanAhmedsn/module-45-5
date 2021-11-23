import './App.css';

function App() {
  const nayoks =["Monu","Janu","Sokina", "abeda", "jabeda", "zorina",'arina', 'sorifa', 'abedali', 'sakil shan a business man'];

  const cinermas = [
                   { actors:"koober", heroin:"kobita"},
                   { actors:"jobed", heroin:"Jobeda"},
                   { actors:"Aner Koli", heroin:"begum shaheba"},
                   { actors:"koober", heroin:"kobita"},
                   { actors:"koober", heroin:"kobita"},
                   { actors:"koober", heroin:"kobita"},
                   { actors:"koober", heroin:"kobita"},
                   { actors:"koober", heroin:"kobita"},
                   { actors:"koober", heroin:"kobita"},
                   { actors:"koober", heroin:"kobita"},
                   { actors:"koober", heroin:"kobita"},
                   { actors:"koober", heroin:"kobita"},
                   { actors:"koober", heroin:"kobita"},
                   { actors:"koober", heroin:"kobita"},
                   { actors:"koober", heroin:"kobita"},
                   { actors:"koober", heroin:"kobita"}
                   

  ]
  return (
    <div className="App">

      <ul>
        {
         nayoks.map(nayok => <li>{nayok}</li>)
        }
        {
          cinermas.map(cinema => <Cinema actors={cinema.actors} heroin={cinema.heroin}></Cinema>)
        }
      </ul>
      <Cinema actors="J bond" heroin="C Women"></Cinema>
    
    </div>
  );
}


function Cinema(props) {
  return (
    <div className="person">
      <h2>Actors: {props.actors}</h2>
      <h2>Heroin: {props.heroin}</h2>
    </div>
  )
}

function Person(props){
  console.log(props)
  return (
    <div className="person">
      <h2>Name: {props.name}</h2>
      <h3>Nayika: {props.nayika}</h3>
      <h4>Country: {props.country} </h4>
    </div>
  )
}



export default App;










/*

 function Person() {
  const person ={
  border: '5px solid orangered',
  borderRadius: '5px',
  color:'white',
  margin: '15px'
  }












  return (
    <div style={{ backgroundColor: 'yellowgreen', border: '5px solid orangered',
    borderRadius: '5px',
    color:'white',
    margin: '15px'}}>
      <h2>Shakib Al Hasan</h2>
      <h3>Profession: Cricket</h3>
      <h4>Country: Bangladesh</h4>
    </div>
  )
 }






   <Person name="Rubel" nayika="Mousumi" country="BD"></Person>
      <Person name="Riaz" nayika="Shabnur"></Person>
      <Person name="ALomgir" nayika="shabana"></Person>
*/