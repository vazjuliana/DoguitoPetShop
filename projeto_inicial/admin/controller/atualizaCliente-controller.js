import { clienteService } from "../service/cliente-service.js"

const pegaURL = new URL(window.location)

const id = pegaURL.searchParams.get('id')

const inputNome = document.querySeletor('[data-nome]')
const inputNome = document.querySeletor('[data-email]')

clienteService.detalhaCliente(id)
.then (dados => {
    inputNome.value = dados.nome
    inputNome.value = dados.email

})

const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', (evento)=>{
    evento.preventDefault()

    clienteService.altualizaCliente(id, inputNome.value, inputEmail.value)
    .then(()=>{
        window.location.href = "../telas/edicao_concluida.html"
    })
})