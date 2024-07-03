
//variables
const general=document.getElementById("general");
const business=document.getElementById("business");
const technology=document.getElementById("technology");
const sports=document.getElementById("sports");
const entertainment=document.getElementById("entertainment");
const searchbtn=document.getElementById("searchbtn");
const newsquery=document.getElementById("newsquery");
const newstype=document.getElementById("newstype");
const newsdetails=document.getElementById("newsdetails");

//
let newsDataArray=[];

const api_key="7b3465d7605d46bbb0a3cae53d0dedde";
const headlines_news = "https://newsapi.org/v2/top-headlines?country=in&apiKey=";
const general_news = "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=";
const business_news = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=";
const sports_news = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=";
const entertainment_news = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=";
const technology_news = "https://newsapi.org/v2/top-headlines?country=in&category=technology&pageSize=8&apiKey=";
const search_news = "https://newsapi.org/v2/everything?q=";


window.onload=()=>{
  newstype.innerHTML="<h2> HEADLINES </h2>"
  fetchNewsheadlines();
};
//apis
general.addEventListener("click",()=>
{
    fetchGeneralNews();

});

business.addEventListener("click",()=>
{
    fetchBusinessNews();

});

technology.addEventListener("click",()=>
{
    fetchTechnologyNews();
});
sports.addEventListener("click",()=>
{
    fetchSportsNews();
});

entertainment.addEventListener("click",()=>
{
    fetchEntertainmentNews();
});
searchbtn.addEventListener("click",()=>
{
    fetchSearchNews();
});


const fetchNewsheadlines=async()=>{
    const response=await fetch(headlines_news+api_key)
    newsDataArray=[]
    if (response.status>=200 && response.status<300)
    {
        const myjson=await response.json();
        console.log(myjson);
        newsDataArray=myjson.articles;
    }
    else{
        console.log(response.status,response.statusText);
    }
    displaynews();
}

const fetchGeneralNews=async()=>{
    const response=await fetch(general_news+api_key)
    newstype.innerHTML="<h2> GENERAL </h2>"
    newsDataArray=[]
    if (response.status>=200 && response.status<300)
    {
        const myjson=await response.json();
        console.log(myjson);
        newsDataArray=myjson.articles;
    }
    else{
        console.log(response.status,response.statusText);
    }
    displaynews();
}


const fetchBusinessNews=async()=>{
    const response=await fetch(business_news+api_key)
    newstype.innerHTML="<h2> BUSINESS </h2>"
    newsDataArray=[];
    if (response.status>=200 && response.status<300)
    {
        const myjson=await response.json();
        newsDataArray=myjson.articles;
    }
    else{
        console.log(response.status,response.statusText);
    }
    displaynews();
}

const fetchSportsNews=async()=>{
    const response=await fetch(sports_news+api_key)
    newstype.innerHTML="<h2> SPORTS </h2>"
    newsDataArray=[]
    if (response.status>=200 && response.status<300)
    {
        const myjson=await response.json();
        newsDataArray=myjson.articles;
    }
    else{
        console.log(response.status,response.statusText);
    }
    displaynews();
}

const fetchEntertainmentNews=async()=>{
    const response=await fetch(entertainment_news+api_key)
    newstype.innerHTML="<h2> ENTERTAINMENT </h2>"
    newsDataArray=[]
    if (response.status>=200 && response.status<300)
    {
        const myjson=await response.json();
        newsDataArray=myjson.articles;
    }
    else{
        console.log(response.status,response.statusText);
    }
    displaynews();
}

const fetchTechnologyNews=async()=>{
    const response=await fetch(technology_news+api_key)
    newstype.innerHTML="<h2> TECHNOLOGY </h2>"
    newsDataArray=[]
    if (response.status>=200 && response.status<300)
    {
        const myjson=await response.json();
        newsDataArray=myjson.articles;
    }
    else{
        console.log(response.status,response.statusText);
    }
    displaynews();
}

const fetchSearchNews=async()=>{
    const response=await fetch(search_news+newsquery.value+"&apiKey="+api_key)
    newstype.innerHTML=newsquery.value;
    newsDataArray=[]
    if (response.status>=200 && response.status<300)
    {
        const myjson=await response.json();
        newsDataArray=myjson.articles;
    }
    else{
        console.log(response.status,response.statusText);
    }
    displaynews();
}


function displaynews(){

    newsdetails.innerHTML=""
    if (newsDataArray.length==0)
    {
        newsdetails.innerHTML="<h5> No data found </h5>"
        return;
    }
    newsDataArray.forEach(news=>{
        let date=news.publishedAt.split("T");
        var cardbody=document.createElement('div');
        
        var col=document.createElement('div');
         col.className="col-sm-12 col-md-4 col-lg-3 p-2 card m-1";
         col.setAttribute("height","100%");
         col.classList.add('hover-effect');

         var card=document.createElement('div');
         card.className="p-2";

         var img=document.createElement('img');
         img.setAttribute("height","100%");
         img.setAttribute("width","100%");
       
         if (news.urlToImage)
         {img.src=news.urlToImage;
         }
         else{
            img.src="news.jpg";
         }
         
         var newsheading=document.createElement('h6');
         newsheading.className="card-title";
         newsheading.innerHTML=news.title.slice(0,100)+"....";

         var dateheading=document.createElement("h6");
         dateheading.className="text-primary";
         dateheading.innerHTML=date[0];
         
        //  var description=document.createElement("p");
        //  description.className="text-muted";
        //  description.innerHTML=news.description;
         
         var link=document.createElement("a");
         link.className="btn btn-dark";
         link.setAttribute=("target","blank");
         link.href=news.url;
         link.innerHTML="Read More";

       cardbody.appendChild(newsheading);
       cardbody.appendChild(dateheading);
    //    cardbody.appendChild(description);
       cardbody.appendChild(link);

       card.appendChild(img);
       card.appendChild(cardbody);

       col.appendChild(card);
       
       newsdetails.appendChild(col);
    })

}
