const   loginAccessREgister = document.getElementById('loginAccessRegister'),
        buttonRegister = document.getElementById('loginButtonRegister'),
        buttonAccess = document.getElementById('loginButtonAccess')

    buttonRegister.addEventListener('click', () => {
        loginAccessREgister.classList.add('active')
    })