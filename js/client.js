const form = document.querySelector("form")

form.addEventListener('submit', () => {
  var cadastro =  JSON.parse(localStorage.getItem('client')) || []

  var name = document.querySelector('input#name').value
  var email = document.querySelector('input#email').value
  var street = document.querySelector('input#street').value
  var number = document.querySelector('input#number').value.toString()
  var city = document.querySelector('input#city').value
  var uf = document.querySelector('input#UF').value

  var dados = {
    name,
    email,
    addrees: {
      street,
      number,
      city,
      uf
    }
    
  }

  cadastro.push(dados)

  localStorage.setItem('client', JSON.stringify(cadastro))

})
