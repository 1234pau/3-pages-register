const userEmail = document.getElementById('userEmail')
const userPassword = document.getElementById('userPassword')
const form = document.getElementsByTagName('form')
const button = document.querySelector('.button')
const inputs = document.querySelectorAll('input')

inputs.forEach(item => {
    item.addEventListener('input', () => {
        if (item.value) {
            //remove the disabled class from button
            button.classList.remove('disabledClass')
        }
    })
})
button.addEventListener('click', function() {
    const userName = document.querySelector('.userName').value;
    localStorage.setItem('objectToPass', userName);

})