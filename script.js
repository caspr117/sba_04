
import {aired,plot, advisory} from "./dom.js"
import{list,rating} from "./src.js"
import axios from "https://cdn.jsdelivr.net/npm/axios@1.4.0/+esm"
let response;


let get1;






async function populateList(){
  get1 = await axios.get("https://api.jikan.moe/v4/anime")
 console.log(get1.data.data)
  get1.data.data.forEach((ele) =>{
    // console.log(ele)
    const option = document.createElement('option')
    option.textContent = ele.title
    option.value = ele.mal_id
    // console.log(ele.mal_id)
    
    
    

    list.appendChild(option)

  })

 }

  ///Populating list


populateList()


  list.addEventListener("change",async (event)=>{

    const images = document.querySelectorAll("img")
    images.forEach(ele => ele.remove())
    advisory.textContent = ""
    plot.textContent= ""
    rating.textContent = ""
    aired.textContent = ""
   
  
     const s = await axios.get(`https://api.jikan.moe/v4/anime/${event.target.value}/pictures`)
     const l = await axios.get(`https://api.jikan.moe/v4/anime/${event.target.value}`)
     const x = l.data.data
    
    s.data.data.forEach((ele)=>{
      
      
      const m = document.createElement('img')
      m.src = ele.jpg.large_image_url
      m.style.border = "2px solid white"
      m.style.width="auto"
      m.style.display="block"
      advisory.textContent = ""
      document.body.appendChild(m)
      setTimeout(() =>{advisory.textContent = `Parental Advisory: ${x.rating}`},1500)
      advisory.style.color = "red"
     setTimeout(()=>{plot.textContent = `Plot: ${x.synopsis}`},1000)
      setTimeout(() => {rating.textContent = `Rating: ${x.score}/10`},500)
      setTimeout(()=>{aired.textContent = `Aired: ${x.aired.string}`},2000)
     



    })

  
      
    })

  

  