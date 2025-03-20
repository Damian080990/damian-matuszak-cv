const hamburger = document.querySelector('.hamburger')
const navigation = document.querySelector('.navigation')
const body = document.body
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    navigation.classList.toggle('open')
    body.classList.toggle("no-scroll")
});

