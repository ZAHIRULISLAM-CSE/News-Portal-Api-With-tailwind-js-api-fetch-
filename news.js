// Fetch news title
const fetchNewsTitle=()=>{
    const url="https://openapi.programming-hero.com/api/news/categories";
    fetch(url)
    .then(response => response.json())
    .then(data =>  displayTitle(data.data.news_category))
}

const displayTitle=(data)=>{
    data.forEach(singleData =>{
        // console.log(singleData)
        const {category_name}=singleData;
        console.log(category_name);
        const titleContainer=document.getElementById("section-container");
        titleContainer.innerHTML+=`
        <p">${category_name}</p>
        `
    })
}