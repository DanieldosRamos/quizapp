import { trocarTema, verificarTema } from "./helpers/tema-helper"



const botaoTema = document.querySelector(".tema button")
const body = document.querySelector("body")

botaoTema.addEventListener("click", () => {
    trocarTema(tema, body, botaoTema)
})

verificarTema(tema, body,botaoTema)



