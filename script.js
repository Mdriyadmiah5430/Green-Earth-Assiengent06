const categoryContainer=document.getElementById("categoryContainer")


const loadCategory= () =>{
    fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => {
        const categories =data.categories
        // console.log(data.categories);
        showCategory(categories)
        

    })
    .catch((err) =>{
        console.log(err);
    })
}

const showCategory=(categories)=>{
    categories.forEach(cat => {
            categoryContainer.innerHTML += `
             <li class=" hover:bg-[#15803d] h-[32px] pl-3 pt-1 cursor-pointer rounded-md ">${cat.category_name}</li>

            `
        });
        categoryContainer.addEventListener('click', (e) =>{
            const allLi=document.querySelectorAll('li')
            console.log(allLi)
            allLi.forEach(li =>{
                li.classList.remove('bg-[#15803d]')
            })
         if(e.target.localName === "li"){
               console.log(e.target)
            e.target.classList.add('bg-[#15803d]')
         }
        })

}


loadCategory()