document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("navbar");
    const toggleButton = document.querySelector(".toggle-button");

    toggleButton.addEventListener("click", function() {
      navbar.classList.toggle("hidden");
    });
  });



const weather = document.querySelector('#weather')
weather.addEventListener('click', function() {
    window.location.href = `https://weather-app-front-five.vercel.app/`
})


const news = document.querySelector('#morning')
news.addEventListener('click', function () {
    window.location.href =`https://morningnews-front-seven.vercel.app/`
})


const stay = document.querySelector('#staynomad')
stay.addEventListener('click', function(){
    window.location.href =`https://1drv.ms/p/s!AgZnD29zpG3Cj8FLdcGQAjfGm0qO9w?e=Ongefo&nav=eyJzSWQiOjI1NiwiY0lkIjowfQ
    `
})

const moviz = document.querySelector('#moviz')
moviz.addEventListener('click', function() {
    window.location.href =`https://moviz-front-nine.vercel.app/`
})


const mails = document.querySelector('#mails')
mails.addEventListener('click', function() {
    window.location.href ='https://mymail-app.vercel.app/'
})
const todos = document.querySelector('#todoList')
todos.addEventListener('click', function() {
    window.location.href ='https://todo-list-react-two-pi.vercel.app/'
})



const pokedex = document.querySelector('#pokedex')
console.log(pokedex);

pokedex.addEventListener('click', function () {
    window.location.href='https://pokedex-psi-three-47.vercel.app/'
})


