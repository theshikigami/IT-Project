const auth = {
    init() {
      this.setupForms();
      this.checkAuthState();
    },
  
    setupForms() {
      // Handle login form submission
      const loginForm = document.getElementById('login-form');
      if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
          e.preventDefault();
          const email = loginForm.elements.email.value;
          
          // Set authentication state
          localStorage.setItem('autohub-auth', 'true');
          localStorage.setItem('autohub-user-email', email);
          
          // Force redirect to dashboard
          window.location.href = 'dashboard.html';
        });
      }
  
      // Handle registration form submission
      const registerForm = document.getElementById('register-form');
      if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
          e.preventDefault();
          const email = registerForm.elements.email.value;
          
          // Set authentication state
          localStorage.setItem('autohub-auth', 'true');
          localStorage.setItem('autohub-user-email', email);
          
          // Force redirect to dashboard
          window.location.href = 'dashboard.html';
        });
      }
  
      // Handle logout
      document.getElementById('logout-btn')?.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.clear();
        window.location.href = 'index.html';
      });
    },
  
    checkAuthState() {
      const isAuthenticated = localStorage.getItem('autohub-auth') === 'true';
      const currentPage = window.location.pathname.split('/').pop();
  
      // Redirect to dashboard if logged in and on auth pages
      if (isAuthenticated && ['login.html', 'register.html'].includes(currentPage)) {
        window.location.href = 'dashboard.html';
      }
      
      // Redirect to login if not authenticated and on protected pages
      if (!isAuthenticated && ['dashboard.html'].includes(currentPage)) {
        window.location.href = 'login.html';
      }
    }
  };
  
  // Initialize auth system when DOM loads
  document.addEventListener('DOMContentLoaded', () => auth.init());