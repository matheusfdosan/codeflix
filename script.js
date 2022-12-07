const form = document.querySelector("form")

form.onsubmit = (event) => {
  event.preventDefault()

  const movieName = event.target[0].value
  const movieURL = event.target[1].value

  addMovie(movieName, movieURL)

  form.reset()
  const inputName = event.target[0]
  inputName.focus()
}

function addMovie(movieName, url) {
  const img = document.createElement("img")
  img.src = url
  img.alt = url
  img.classList.add("img-banner")

  const button = document.createElement("button")

  button.classList.add("btn-banner")
  button.textContent = "Assistir"

  const figcaption = document.createElement("figcaption")

  figcaption.classList.add("figcap")
  figcaption.textContent = movieName

  const figure = document.createElement("figure")

  figure.classList.add("fig-banner")
  figure.insertAdjacentElement("beforeend", img)
  figure.insertAdjacentElement("beforeend", button)
  figure.insertAdjacentElement("beforeend", figcaption)

  const mainBanners = document.querySelector(".main-banners")
  mainBanners.insertAdjacentElement("beforeend", figure)
}
