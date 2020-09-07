//const { response } = require("express")

console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
var individualdata
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch("https://covid-193.p.rapidapi.com/statistics", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid-193.p.rapidapi.com",
            "x-rapidapi-key": "d35984a55emsh71bbcd20cf6658dp10af3bjsn4317d86e369d"
        }
    }).then((response)=>{
        
        individualdata = response.filter((item)=>{
            return item.country == location
        })
    })
    messageTwo.textContent = individualdata
})