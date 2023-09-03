// load category from api 
const handleCategory = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await response.json();

    const categoryContainer = document.getElementById('category-container');
    data.data.forEach((category) => {
    const div = document.createElement('div');
    div.innerHTML= `
    <a onclick="handleClick('${category.category_id}')" class="tab btn btn-active ">${category.category}</a> 
    `    
    categoryContainer.appendChild(div);

    });

}

// data load based on category

const handleClick= async(categoryId)=>{
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await response.json();
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';
    console.log(categoryId);
    if(categoryId === '1005'){
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="text-center">
        <img src="Icon.png">
        <h3>Oops! Sorry. There is no content here
        </h3>
        </div>
       

        `
        cardContainer.appendChild(div);
        }
   
    data.data.forEach((card) => {
        
        const div = document.createElement('div');
        const postedDate = card.others.posted_date;
        const time = convertSeconds(postedDate);

        div.innerHTML = `
        <div class="card  h-80 bg-base-100 shadow-xl">
        <figure><img src="${card?.thumbnail}" alt="Shoes" /></figure>
        <div class="bg-black text-white w-1/2 -mt-12 ">
            <p id="time">${time.hours} hrs ${time.minutes} min ago</p>
        </div>
        <div class="card-body flex flex-row">
            <div><img src="${card?.authors[0].profile_picture}" alt="profile" class="h-10 w-10 rounded-full"></div>
            <div>
                <h2 class="card-title">
                    ${card?.title}
                  </h2>
                  <p class="text-sm font-normal text-[#171717] opacity-70">${card?.authors[0]?.profile_name}</p>
                  <p class="text-sm font-normal text-[#171717] opacity-70">${card?.others?.views} views</p>        
            </div>
        </div>
        </div>
        `
        if(card.length===0){
            console.log("oops! sorry");
        }
        // console.log(card.others.posted_date);

        // // convert time 
        
        function convertSeconds(seconds) {
            
            const hours = Math.floor(seconds / 3600);
            const minutes = Math.floor((seconds % 3600) / 60);
            return{
                hours, minutes,
            } ;
            
          }
          
        //   const time = document.getElementById('time');
        //   const timeText = convertSeconds(postedDate);
        //   document.getElementById('').textContent = timeText;


        cardContainer.appendChild(div);
    });
   
}

const handleSort = async() => {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await response.json();

}
    
 
handleCategory();
handleClick("1000")
