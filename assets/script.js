let dolar = 5.52 

let usdInput = document.querySelector("#usd")
let brlinput = document.querySelector("#brl") 

usdInput.addEventListener("keyup", () => {
    convert("usd-to-brl")

})

brlinput.addEventListener("keyup", () => {
    convert("brl-to-usd")  
})

usdInput.addEventListener("blur", () => {
    usdInput.value = formatCurrency(usdInput.value)
})

brlinput.addEventListener("blur", () => {
    brlinput.value = formatCurrency(brlinput.value)
})

usdInput.value = "1000,00"
convert("usd-to-brl")

//funções

function formatCurrency(value) {
    let fixedValue = fixvalue(value)
    let options = {
        useGrouping: false,
        minimumFractionDigits: 2
    }
    let formatter = new Intl.NumberFormat("pt-BR", options)
   return formatter.format(fixedValue)
}

function fixvalue(value) {
    let fixedValue = value.replace(",", ".")
    let floatvalue = parseFloat(fixedValue)
    if(floatvalue== NaN) {
        floatvalue = 0
    }
    return floatvalue
}


function convert(type) {
    if (type == "usd-to-brl") {
        let fixedValue = fixvalue(usdInput.value)
        let result = fixedValue * dolar
        result = result.toFixed(2)

        brlinput.value = formatCurrency(result)

    }

    if (type == "brl-to-usd") {
        let fixedValue = fixvalue(brlinput.value)
        let result = fixedValue / dolar
        result = result.toFixed(2)

        usdInput.value = formatCurrency(result)    
    }

}