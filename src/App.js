import './App.css';
import {useState } from 'react';
const words = [

    { word: "React", meaning: "A JavaScript library for building user interfaces." },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." }

];


function App() {
  const [input, setInput] = useState('');
  const [meaning, setMeaning] = useState('');
  const [dictionary, setDictionary]= useState(words)

  const handleChange=(e)=>{
    setInput(e.target.value)
    if(e.target.value===""){
      setMeaning('')
    }
  }

const handleSearch=()=>{
  const foundWord = dictionary.find((w)=>w.word.toLowerCase()==input.toLowerCase());


  if(foundWord){
    setMeaning(foundWord.meaning)
  }else{
  setMeaning("Word not found in the dictionary.")}
}

  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <input type='text' value={input} onChange={handleChange} required/>
      <button onClick={handleSearch}>Search</button>
      <div style={{display:'flex', justifyContent:'center'}}><p><strong>Definition:</strong></p><p>{meaning}</p></div>
    </div>
  );
}

export default App;
