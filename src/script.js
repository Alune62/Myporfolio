/* eslint-disable no-undef */
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



const pokedex = document.querySelector('#pokedex')
console.log(pokedex);

pokedex.addEventListener('click', function () {
    window.location.href='https://pokedex-psi-three-47.vercel.app/'
})


// // Envoie de mail avec SendGrid
// const form = document.querySelector('#contactForm'); // Ensure the form has the correct ID

// form.addEventListener('submit', (event) => {
//   event.preventDefault(); // Prevent default form submission

//   // Form data validation (you can add your own logic here)

//   const lastname = document.getElementById('lastname').value;
//   const firstname = document.getElementById('firstname').value;
//   const phone = document.getElementById('phone').value;
//   const email = document.getElementById('email').value;
//   const message = document.getElementById('message').value;

//   const myEmail = 'seydina.alioune9319@gmail.com'; // Use this for the sender address

//   // Prepare data to send to SendGrid API
//   const data = {
//     from: myEmail, // Use your email address here
//     to: 'Recipient email address', // Replace with the destination email address
//     subject: 'Message from your website',
//     text: `LastName: ${lastname}\nFirstName: ${firstname}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`
//   };

//   // Replace with your SendGrid API key
//   const apiKey = "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";

//   // SendGrid API URL
//   const apiUrl = 'https://api.sendgrid.com/v3/mail';

//   // HTTP request options
//   const options = {
//     method: 'POST',
//     headers: {
//       Authorization: `Bearer ${apiKey}`,
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   };

//   // Send HTTP request to SendGrid API
//   fetch(apiUrl, options)
//     .then(response => response.json())
//     .then(data => {
//       if (data.statusCode === 200) {
//         // Form submission successful, show a confirmation message
//         alert('Message sent successfully!');
//       } else {
//         // Form submission failed, show an error message
//         alert('Email sending failed. Please try again later.');
//         console.error('SendGrid API error:', data);
//       }
//     })
//     .catch(error => {
//       console.error('Error sending email:', error);
//       alert('Email sending failed. Please try again later.');
//     });
// });

