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
    console.log(category);

    });

}

// data load based on category

const handleClick= async(categoryId)=>{
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await response.json();

    const cardContainer = document.getElementById('card-container');

    data.data.forEach((card) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card w-48 bg-base-100 shadow-xl">
        <figure><img src="${card.thumbnail}" alt="Shoes" /></figure>
        <div class="card-body flex flex-row">
            <div><img src="${card.authors[0].profile_picture}" alt="profile" class="h-10 w-10 rounded-full"></div>
            <div>
                <h2 class="card-title">
                    Shoes!
                  </h2>
                  <p class="text-sm font-normal text-[#171717] opacity-70">${card.authors[0].profile_name}</p>
                  <p class="text-sm font-normal text-[#171717] opacity-70">${card.others.views} views</p>        
            </div>
        </div>
        </div>
        `
        console.log(card);
        cardContainer.appendChild(div);
    });

    // console.log(data.data[0].authors[0].profile_picture);
}

 
handleCategory();