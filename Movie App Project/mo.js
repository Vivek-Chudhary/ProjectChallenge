


const moiveBox=document.querySelector("movie-box")
const getMovies=async(url)=>{
    const response=await fetch(url)
    const data=await response.json()
    showMovies(data)
}
getMovies(APIURL); 

const showMovies=(data)=>{
    data.result.forEach((result)=>{
        const box=document.createElement("div")

    }
    )
}