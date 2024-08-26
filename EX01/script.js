let primeiroNome = window.prompt("Digite seu primeiro nome:")
let sobrenome = window.prompt("Digite seu segundo nome:")
let curso = window.prompt("Digite seu curso da base técnica:")

const anoNascimento = parseInt(prompt("Digite seu ano de nascimento:"))

let idade = 2024 - anoNascimento

window.alert(`Olá ${primeiroNome} ${sobrenome}
Então você estuda ${curso} e tem ${idade} anos. Legal!
    
    `)
