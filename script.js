//69a45517-35e6-48a0-ad1b-45237b04d2e6
//e6099e569d07764c66552cd64d62baf5f7178bf18be6c3e3f0aa3a251e6ccc4190935acd7949ff94d1e50d17bdae314cdd285f65bea050c74b3a8648ee7c128a57d84db0177ae50b1e51940cfc688485ec5139d4b37e8c12b78766416274503b388915e23659ba626a0ceb33444c96f2
let response;
const list = document.getElementById("list");
const option = document.createElement('option')
const img = document.createElement("img")
async function get() {
  response = await axios.get("https://api.jikan.moe/v4/anime");
  console.log(response.data.data[0].images.jpg);

  let img = document.createElement("img");

  img.src = "https://cdn.myanimelist.net/images/anime/4/19644l.jpg";
  document.body.appendChild(img);

  img.style.width = "300px";
}

async function populateList(){
 let get = await axios.get("https://api.jikan.moe/v4/anime")
 console.log(get)
  get.data.data.forEach((ele) =>{
    console.log(ele)
    const option = document.createElement('option')
    option.textContent = ele.title
    option.value = ele.mal_id
    console.log(ele.mal_id)
    
    
    

    list.appendChild(option)

  })

 }

  ///Populating list


populateList()


  list.addEventListener("change",async (event)=>{
    console.log(event.target.value)
     const s = await axios.get(`https://api.jikan.moe/v4/anime/${event.target.value}/pictures`)

    s.data.data.forEach((ele)=>{
      const m = document.createElement('img')
      m.src = ele.jpg.large_image_url
      document.body.appendChild(m)
    })

    

  })