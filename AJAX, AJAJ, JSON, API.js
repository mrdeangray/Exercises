import fetch from 'cross-fetch';

const loadStarWarsPeople = async()=>{
    const res = await fetch("https://swapi.dev/apu/people/1/")
    const data = await res.json()
    console.log(data)
}
loadStarWarsPeople()