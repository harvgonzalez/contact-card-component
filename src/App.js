import React, { useState, useEffect } from 'react';
import './App.css';
import ContactCard from './ContactCard';
const App = () =>{
  const contacts  = [
    {
      avatarUrl: "https://via.placeholder.com/150", 
      name: "Jenny Han",
      email: "jenny@notreal.com",
      age: 21
    },
    {
      avatarUrl: "https://via.placeholder.com/150", 
      name: "Peter Pan" ,
      email: "peter@noreal.es",
      age: 27
    },
    {
      avatarUrl: "https://via.placeholder.com/150", 
      name: "Tony Start" ,
      email: "tony@marvel.com" ,
      age: 70
    },
    {
      avatarUrl: "https://via.placeholder.com/150", 
      name: "Lisa Simpson" ,
      email: "lisa@springfield.com" ,
      age: 12
    }
  ];
  const [results, setResults] = useState([]);
  useEffect(()=>{
    fetch("https://randomuser.me/api/?results=4")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setResults(data.results);
     });
  }, [])

  return (
    <div>
      {results.map((result, index)=>{
        return(
          <ContactCard key={index}
           avatarUrl = {result.picture.large}
           name = {result.name.first}
           email = {result.email}
           age = {result.dob.age} />
        )
      })}
    </div>
  );
}

export default App;
