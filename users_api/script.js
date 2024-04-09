fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => {
    const userContainer = document.getElementById('users');


    for(let i = 0; i < data.length; i++) {
        const user = data[i];
        const p = document.createElement('p');
        p.innerHTML = `<strong>${user.username}</strong>`; // Use user.username instead of hardcoded 'user name'
        userContainer.appendChild(p);
    }
})
