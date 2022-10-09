const API_Url = 'https://rickandmortyapi.com/api/character'

const getCharacters = async API_Url => {

    try {
        const results = await fetch(API_Url)
        const data = await results.json()
        const characters = data.results

        characters.forEach(item =>{
            const article = document.createRange().createContextualFragment(
                `
                <article>
                    <div class="image-container">
                        <img src="${item.image}"
                        alt="character ">
                        <h2>${item.name}</h2>
                        <span>${item.status}</span>
                    </div>
                </article>
                `
            )
            const main = document.querySelector('main')
            main.append(article)
        })

    } catch (error) {
        console.error(error)
    }
}


getCharacters(API_Url)