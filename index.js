document.addEventListener('DOMContentLoaded', () => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php').then(resp => resp.json()).then(data => {
        category(data.categories)
    })
    const topMenu = document.querySelector('#top_menu')
    console.log(topMenu)

    const category = (CatArr) => {
        CatArr.forEach(element => {
            const catItem = document.createElement('li')
            catItem.textContent = element.strCategory

            catItem.addEventListener('click', (e) => {
                // will need another fetch for category-clicked recipes
                // when clicked display image of dish and dish title
            })

            //(somewhere) when click an option in the category, display recipe image, name, and instructions

            topMenu.append(catItem)
        });
    }
})