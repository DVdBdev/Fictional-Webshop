const cardContainer = document.getElementById("card-container");

async function fetchRandomUsers() {
  try {
    const response = await fetch(
      "https://randomuser.me/api/?results=5&nat=us,gb,ca,au,nz"
    );
    const data = await response.json();
    displayUsers(data.results);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

function displayUsers(users) {
  users.forEach((user) => {
    const card = document.createElement("section");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${user.picture.medium}" alt="Profile Picture">
      <h3><span>${user.name.title}</span> ${user.name.first} ${user.name.last}</h3>
      <p>${user.location.country}</p>
    `;
    cardContainer.appendChild(card);
  });
}

fetchRandomUsers();
