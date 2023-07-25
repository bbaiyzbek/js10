const currency = document.querySelector('#currency')
const span = document.querySelector('#span')
const input = document.querySelector('#input')
const convertBtn = document.querySelector('#convertBtn')
const base = document.querySelector('#selectBase')
const handleCurrency = () => {
    fetch(`https://api.exchangerate.host/latest?base=${base.value}&symbols=${currency.value}&amount=${input.value}&places=2`)
        .then(res => res.json())
        .then(data => {
            if (base.value !== currency.value){
                span.innerHTML = `${input.value} ${base.value} = ${Object.values(data.rates)} ${currency.value}`
            } else{
                alert('Error! The same currency!')
            }

        })
}
convertBtn.addEventListener('click', (handleCurrency))
