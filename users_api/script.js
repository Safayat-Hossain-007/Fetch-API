document.getElementById('load-user').addEventListener('click', function () {
    const countText = document.getElementById('user-count').value;
    const count = parseInt(countText);
    console.log(count);
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            data = data.slice(0, count);
            const userContainer = document.getElementById('users');
            userContainer.innerHTML = '';
            for (let i = 0; i < data.length; i++) {
                const user = data[i];
                const p = document.createElement('p');
                p.innerHTML = `
<p class="users"> Name: <strong>${user.name}</strong>
    <button onclick="getUserDetails(${user.id})">Get Details -${user.id}</button>
    </p>

`;
                userContainer.appendChild(p);
            }
        })
})



function getUserDetails(userId) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const detail = document.getElementById('user-detail');
            detail.innerHTML = `
<h1>${data.name}</h1>
<h4>Email : ${data.email}</h4>
<p>Phone : ${data.phone}</p>
`
        })
}

