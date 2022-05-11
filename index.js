
document.addEventListener('DOMContentLoaded', () => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(resp => resp.json())
    .then(data => {
        category(data.categories) 
    })
//selects our top menu. iterates through our categories- and lists them out.     
    const topMenu = document.querySelector('#top_menu')
    console.log(topMenu)

    const category = (CatArr) => {
        CatArr.forEach(element => {
            const catItem = document.createElement('li')
            catItem.textContent = element.strCategory

            catItem.addEventListener('click', (e) => {
                // when category clicked display image of dish and dish title
                fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + element.strCategory) // our category goes in here - need to change
                .then(resp => resp.json())
                .then(recipeName => {
                    meals(recipeName.meals)
                    console.log(recipeName)

                })
            })
            //(somewhere) when click an option in the category, display recipe image, name, and instructions
            topMenu.append(catItem)        
        });
    }

    const meals= (RecipeArray) => {
        const recipeImageContainer= document.querySelector('#category_options')
        recipeImageContainer.innerHTML= ""

        RecipeArray.forEach(mealItem => {
            
            const recipeImage= document.createElement('img')
            recipeImage.src= mealItem.strMealThumb

            const recipeTitle= document.createElement('h2')
            recipeTitle.textContent= mealItem.strMeal

            recipeImageContainer.append(recipeImage, recipeTitle)



            recipeImage.addEventListener('click', (e) => {
                // when category clicked display image of dish and dish title
                fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + mealItem.idMeal) // our category goes in here - need to change
                .then(resp => resp.json())
                .then(mealDetail => {
                    instructions(mealDetail.meals)
                })
            })
        })
    }

    const instructions= (mealDetail) => {
        const directions= document.querySelector('#directions')
        

        mealDetail.forEach(element => {
            directions.textContent= element.strInstructions
            console.log(element.strInstructions)
    })
    }
        
        

})


