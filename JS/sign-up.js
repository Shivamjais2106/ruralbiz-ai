    // Mobile menu toggle
    const mobileBtn = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if(mobileBtn){
      mobileBtn.addEventListener('click',()=>{ mobileMenu.style.display = mobileMenu.style.display==='flex'?'none':'flex'; });
    }

    // Sign-up form validation
    function handleSignUp(event){
      event.preventDefault();
      const fullname = document.getElementById('fullname').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();
      const confirmPassword = document.getElementById('confirmPassword').value.trim();
      const successMsg = document.getElementById('successMsg');
      const errorMsg = document.getElementById('errorMsg');

      successMsg.style.display = 'none';
      errorMsg.style.display = 'none';

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(!fullname || !email || !password || !confirmPassword || !emailRegex.test(email) || password.length<6 || password!==confirmPassword){
        errorMsg.style.display='block';
        return;
      }

      successMsg.style.display='block';
      document.getElementById('signupForm').reset();
    }
