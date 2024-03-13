import React, { useEffect, useState } from "react"
import {createRoot} from "react-dom/client"
import axios from "axios"
import AnimalCard from "./components/AnimalCard";
import CreateNewForm from "./components/CreateNewForm";

function App()
{
    const [animals,setAnimals]=useState([]);
    useEffect(()=>{
        async function go()
        {
            const response=await axios.get("/api/animals");
            setAnimals(response.data)
        }
        go()
    },[])
    return(
        <div className="container">
        <p><a href="/">&laquo; Back to public homepage</a></p>
        <CreateNewForm setAnimals={setAnimals}/>
        <div className="animal-grid">
             {animals.map(function(animal){
            return <AnimalCard key={animal._id} name={animal.name} species={animal.species} photo={animal.photo} id={animal._id} setAnimals={setAnimals}/>
        })}
        </div>
       
        </div>
    )
}
const root=createRoot(document.querySelector("#app"));
root.render(<App/>)