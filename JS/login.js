    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

    function togglePassword() {
      const pwd = document.getElementById('password');
      const toggle = document.querySelector('.show-password');
      if (pwd.type === 'password') {
        pwd.type = 'text';
        toggle.textContent = 'Hide';
      } else {
        pwd.type = 'password';
        toggle.textContent = 'Show';
      }
    }

    function handleLogin(event) {
      event.preventDefault();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();
      const successMsg = document.getElementById('successMsg');
      const errorMsg = document.getElementById('errorMsg');

      successMsg.style.display = 'none';
      errorMsg.style.display = 'none';

      if (email === '' || password === '' || !emailRegex.test(email)) {
        errorMsg.style.display = 'block';
        return;
      }

      successMsg.style.display = 'block';
      setTimeout(() => {
        successMsg.style.display = 'none';
        document.getElementById('loginForm').reset();
      }, 3000);
    }