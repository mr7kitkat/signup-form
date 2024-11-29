const [password1, password2] = document.querySelectorAll('[type="password"]');

const validatePasswords = () => {
    const isValid = password1.value === password2.value;
    password1.classList.toggle("invalid", !isValid);
    password2.classList.toggle("invalid", !isValid);
};

password1.addEventListener("input", validatePasswords);
password2.addEventListener("input", validatePasswords);
