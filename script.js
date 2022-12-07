function clickadd() {
    const movieName = document.querySelector(".movie-name").value
    const movieURL = document.querySelector(".movie-url").value


    const img = document.createElement("img")

    img.src = movieURL
    img.alt = movieURL
    img.classList.add('img-banner')

    const button = document.createElement("button")

    button.classList.add('btn-banner')
    button.textContent = 'Assistir'

    const figcaption = document.createElement("figcaption")

    figcaption.classList.add('figcap')
    figcaption.textContent = movieName

    const figure = document.createElement("figure") 

    figure.classList.add('fig-banner')
    figure.insertAdjacentElement("beforeend", img)
    figure.insertAdjacentElement("beforeend", button)
    figure.insertAdjacentElement("beforeend", figcaption) 

    const mainBanners = document.querySelector('.main-banners')
    mainBanners.insertAdjacentElement('beforeend', figure)
}