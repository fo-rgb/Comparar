
  const input1 = document.createElement(`input`)
  const input2 = document.createElement(`input`)
    const btn = document.createElement(`button`)
    btn.innerText= "Comparar"

input1.className = "primero"
input2.className = "segundo"

document.body.appendChild(input1)
document.body.appendChild(input2)
document.body.appendChild(btn)


btn.addEventListener("click", () => {
    let input1_value = input2.value
    
fetch(`https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=94732983488740c7ac18361880e08e1d&city_name=${input1_value}`)

// https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=94732983488740c7ac18361880e08e1d&city_name=madrid

.then(response => response.json())
.then(json =>{
    const data = json.data[0]
    console.log(data)

    weatherUrl = `https://api.weatherbit.io/v2.0/current?key=94732983488740c7ac18361880e08e1d&${input1_value}`

    let Cite1 = data.city_name
    Cite1 = input1.value
   
    let Cite2 = data.city_name 
    Cite2 = input2.value
    const parafo = data.pres


const divCite1 = document.getElementById(`cite-1`)
const divCite2 = document.getElementById("cite-2")

divCite1.innerText = `name of ciudad : ${Cite1}`
divCite2.innerText = `name of cite : ${Cite2}`


    const pdiv = document.getElementById("pdiv")
    pdiv.innerText = `es mi pres : ${parafo}`
    console.log(data.pres)
    const para = document.getElementById(`pres-element`)

    const cites = [divCite1,divCite2]

    cites.map(element =>{
    
    if (cites[0] > cites[1]) {
        para.innerText = `la presion en ${Cite1} es menor que ${Cite2}`    
    }else{
        para.innerText =`la presion en ${Cite2} es mayor que ${Cite1} `
 }
     console.log(element)
     })  
    
})



})




