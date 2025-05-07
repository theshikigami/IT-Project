const validator = {
  init() {
    this.setupLoginForm();
    this.setupRegisterForm();
  },
  
  setupLoginForm() {
    const form = document.getElementById('login-form');
    if (!form) return;
    
    form.email.addEventListener('input', () => this.validateEmail(form.email));
    form.password.addEventListener('input', () => this.validatePassword(form.password));
  },
  
  setupRegisterForm() {
    const form = document.getElementById('register-form');
    if (!form) return;
    
    ['first_name', 'last_name', 'email', 'phone', 'password', 'confirm_password'].forEach(field => {
      form[field].addEventListener('input', () => this.validateField(form, field));
    });
  },
  
  validateField(form, field) {
    const value = form[field].value;
    let isValid = true;
    
    switch(field) {
      case 'email':
        isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        break;
      case 'password':
        isValid = value.length >= 8;
        if (field === 'password') this.updatePasswordStrength(value);
        break;
      case 'confirm_password':
        isValid = value === form.password.value;
        break;
      default:
        isValid = value.trim() !== '';
    }
    
    form[field].parentElement.classList.toggle('error', !isValid);
    return isValid;
  },
  
  updatePasswordStrength(password) {
    const strength = Math.min
      password.length >= 8 ? 1 : 0 +
      (/[a-z]/.test(password) && /[A-Z]/.test(password) ? 1 : 0 +
      (/\d/.test(password) ? 1 : 0), 
      3
    );
    
    const strengthElement = document.querySelector('.password-strength');
    if (strengthElement) {
      strengthElement.setAttribute('data-strength', strength);
      strengthElement.querySelector('span').textContent = 
        ['Weak', 'Fair', 'Good', 'Strong'][strength];
    }
  }
};

document.addEventListener('DOMContentLoaded', () => validator.init());