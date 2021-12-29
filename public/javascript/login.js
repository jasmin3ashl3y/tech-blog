const formContainer = document.getElementById("loginContainer");
const signupForm = document.getElementById("signup-form");
const loginForm = document.getElementById("login-form");

async function loginFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
    }
}

async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && password) {
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        username,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
}

function toggleForms(e) {
  e.preventDefault();
  const target = e.target;
  
  if (target.id=="switch-to-signup") {
    loginForm.classList.add("hide");
    signupForm.classList.remove("hide");
  } else if(target.id == "switch-to-login") {
    signupForm.classList.add('hide');
    loginForm.classList.remove('hide');
  }

}

formContainer.addEventListener('submit', toggleForms);

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);

