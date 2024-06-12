import { trocarTema, verificarTema } from "./helps/tema-helps"



const botaoTema = document.querySelector(".tema button")
const body = document.querySelector("body")

botaoTema.addEventListener("click", () => {
    trocarTema(tema, body, botaoTema)
})

verificarTema(tema, body,botaoTema)



