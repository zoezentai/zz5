document.getElementById('generate-btn').addEventListener('click', fetchRandomUser);

async function fetchRandomUser() {
    try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        displayUser(data.results[0]);
    } catch (error) {
        console.error('Hiba a felhasználó lekérésekor:', error);
    }
}

function displayUser(user) {
    const userInfo = document.getElementById('user-info');
    userInfo.innerHTML = `
        <h2>${user.name.first} ${user.name.last}</h2>
        <img src="${user.picture.large}" alt="${user.name.first} ${user.name.last}">
        <p>Email: ${user.email}</p>
        <p>Telefonszám: ${user.phone}</p>
        <p>Cím: ${user.location.city}, ${user.location.country}</p>
    `;
}