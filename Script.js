document.getElementById("y").textContent = new Date().getFullYear();

const username = "RuchirS-spec";
const projectsContainer = document.getElementById("project-list");

fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
  .then(response => response.json())
  .then(repos => {
    projectsContainer.innerHTML = "";
    repos.forEach(repo => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || "No description provided."}</p>
        <a class="btn ghost" href="${repo.html_url}" target="_blank">View on GitHub</a>
      `;
      projectsContainer.appendChild(card);
    });
  })
  .catch(() => {
    projectsContainer.innerHTML = "<p>Could not load projects.</p>";
  });
