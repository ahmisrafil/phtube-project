// load category from api 
const handleCategory = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await response.json();

    const categoryContainer = document.getElementById('category-container');
    data.data.forEach((category) => {
        const div = document.createElement('div');
        div.innerHTML = `
    <a onclick="handleClick('${category.category_id}')" class="tab btn btn-active ">${category.category}</a> 
    `
        categoryContainer.appendChild(div);

    });

}

// data load based on category

const handleClick = async (categoryId) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await response.json();
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';
    if (categoryId === '1005') {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="text-center">
        <img src="Icon.png" class="mx-auto">
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
        <div class="card  h-80 bg-base-100 shadow-xl mx-5">
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
                  <div class="flex flex-row">
                  <p class="text-sm font-normal text-[#171717] opacity-70">${card?.authors[0]?.profile_name}</p>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <g clip-path="url(#clip0_11_34)">
                        <path d="M19.375 10.0001C19.375 10.8001 18.3922 11.4595 18.1953 12.197C17.9922 12.9595 18.5063 14.022 18.1203 14.6892C17.7281 15.3673 16.5484 15.4486 15.9984 15.9986C15.4484 16.5486 15.3672 17.7282 14.6891 18.1204C14.0219 18.5064 12.9594 17.9923 12.1969 18.1954C11.4594 18.3923 10.8 19.3751 10 19.3751C9.2 19.3751 8.54062 18.3923 7.80312 18.1954C7.04062 17.9923 5.97813 18.5064 5.31094 18.1204C4.63281 17.7282 4.55156 16.5486 4.00156 15.9986C3.45156 15.4486 2.27187 15.3673 1.87969 14.6892C1.49375 14.022 2.00781 12.9595 1.80469 12.197C1.60781 11.4595 0.625 10.8001 0.625 10.0001C0.625 9.20012 1.60781 8.54075 1.80469 7.80325C2.00781 7.04075 1.49375 5.97825 1.87969 5.31106C2.27187 4.63293 3.45156 4.55168 4.00156 4.00168C4.55156 3.45168 4.63281 2.272 5.31094 1.87981C5.97813 1.49387 7.04062 2.00793 7.80312 1.80481C8.54062 1.60793 9.2 0.625122 10 0.625122C10.8 0.625122 11.4594 1.60793 12.1969 1.80481C12.9594 2.00793 14.0219 1.49387 14.6891 1.87981C15.3672 2.272 15.4484 3.45168 15.9984 4.00168C16.5484 4.55168 17.7281 4.63293 18.1203 5.31106C18.5063 5.97825 17.9922 7.04075 18.1953 7.80325C18.3922 8.54075 19.375 9.20012 19.375 10.0001Z" fill="#2568EF"/>
                        <path d="M12.7094 7.20637L9.14062 10.7751L7.29062 8.92668C6.88906 8.52512 6.2375 8.52512 5.83594 8.92668C5.43437 9.32824 5.43437 9.97981 5.83594 10.3814L8.43125 12.9767C8.82187 13.3673 9.45625 13.3673 9.84687 12.9767L14.1625 8.66106C14.5641 8.25949 14.5641 7.60793 14.1625 7.20637C13.7609 6.80481 13.1109 6.80481 12.7094 7.20637Z" fill="#FFFCEE"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_11_34">
                        <rect width="20" height="20" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                    </div>
                  </div>
                  <p class="text-sm font-normal text-[#171717] opacity-70">${card?.others?.views} views</p>        
            </div>
        </div>
        </div>
        `

        // // convert time 

        function convertSeconds(seconds) {

            const hours = Math.floor(seconds / 3600);
            const minutes = Math.floor((seconds % 3600) / 60);
            return {
                hours, minutes,
            };

        }
        cardContainer.appendChild(div);
    });

}
handleCategory();
handleClick("1000");