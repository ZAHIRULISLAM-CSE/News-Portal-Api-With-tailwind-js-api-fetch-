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
        const {category_name,category_id}=singleData;
        const titleContainer=document.getElementById("section-container");
        titleContainer.innerHTML+=`
        <p onclick="fetchNews('${category_id}')">${category_name}</p>
        `
    })
}
const fetchNews=(id)=>{
    const url=`https://openapi.programming-hero.com/api/news/category/${id}`;
    fetch(url)
    .then(response => response.json())
    .then(data =>displayNews(data.data))
}

const displayNews=(data)=>{
    document.getElementById('news-container').innerHTML="";
    data.forEach(singleNews=>{
        let {title,details,image_url,author,total_view,rating}=singleNews;
        let {name, published_date,img}=author;
        let {number}=rating;
        // console.log(number);
        // console.log(singleNews)
        details=details.slice(0,200)
        const newsContainer=document.getElementById('news-container');
        newsContainer.innerHTML +=`
        <div class="bg-base-100 mt-5 shadow-xl lg:flex ">
                    <div class="w-full flex-1">
                        <img class="min-w-full" src="${image_url}" alt=""/>
                    </div>
                    <div class="flex-1 card-body">
                        <h2 class="card-title">${title}</h2>
                        <p class="mt-3">${details}</p>
                        <div class="flex items-center justify-between">
                            <div class="flex gap-4 items-center">
                                <div>
                                    <img class="rounded-full h-[70px] w-[70px] mt-3 " src="${img}" alt="">
                                </div>
                                <div>
                                    <p>${name}</p>
                                    <p>${published_date}</p>
                                </div>
                            </div>
                            <div>
                                <p>${total_view}</p>
                            </div>
                            <div class="flex gap-2">
                             ${star(number)} 
                             <p>${number}</p>
                            </div>
                            <div >
                                <i class="fa-solid fa-arrow-right"></i>
                            </div>
                    </div>
                </div>
        </div>
          `
    })
}

const star=totalStar=>{
    console.log(totalStar)
    let starContainer='';
    for(let i=1;i<=Math.floor(totalStar);i++){
    //    starContainer=document.getElementById("star");
       starContainer +=`
       <i class="fa-solid fa-star"></i>`
    }
    if(totalStar - Math.floor(totalStar)>0){
        starContainer +=`
       <i class="fa-solid fa-star-half"></i>`
    }
    return starContainer;
}




{/* <i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star-half"></i> */}