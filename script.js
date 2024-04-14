const projects = document.querySelector("#projects");

const projectsList = [
  {
    title: "account-registration",
  },
  {
    title: "around-the-clock",
  },
  {
    title: "audio-player",
  },
  {
    title: "bucket-list",
  },
  {
    title: "food-recipe",
  },
  {
    title: "hangman",
  },
  {
    title: "passenger-counter",
  },
  {
    title: "registration-form",
  },
  {
    title: "shopping-cart",
  },
  {
    title: "starwars-catalog",
  },
  {
    title: "the-sauna",
  },
  {
    title: "todo",
  },
  {
    title: "todo-list",
  },
];

projectsList.forEach((project, index )=> {
    let html = `
        <li class="project" id=${index}>
            <a class="web-link" href="./${project.title}">
                <span class="material-symbols-outlined">captive_portal</span>
                <h4>${project.title}</h4>
            </a>
            <a class="github-link" href="https://github.com/SarbastHesso/All-JAVASCRIPT/tree/main/${project.title}">
              <i class="fa-brands fa-github"></i>
            </a>
        </li>
    `;
    projects.innerHTML += html;
})
