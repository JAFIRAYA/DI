fetch('/users')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    document.getElementById('users').innerText = JSON.stringify(data);
  })
  .catch(error => console.error(error));
