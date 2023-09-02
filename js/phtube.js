// load category from api 
const handleCategory = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await response.json();

    const categoryContainer = document.getElementById('category-container');
    data.data.forEach((category) => {
    const div = document.createElement('div');
    div.innerHTML= `
    <a class="tab btn btn-active">${category.category}</a> 
    `    
    categoryContainer.appendChild(div);
    });
    console.log(data.data[0].category);
}

 
handleCategory();