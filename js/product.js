const form = document.querySelector("form")

form.addEventListener("submit", () => {
  var cadastro =  JSON.parse(localStorage.getItem('product')) || []

  var name = document.querySelector('input#name').value
  var description = document.querySelector('input#description').value
  var code = document.querySelector('input#code').value
  var price = document.querySelector('input#price').value
  var quantity = document.querySelector('input#quantity').value

  var dados = {
    name,
    description,
    code,
    price,
    quantity
  }

  cadastro.push(dados)

  localStorage.setItem('product', JSON.stringify(cadastro))

})