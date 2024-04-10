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
                <div class="img-wrapper">
                    <img src="./go-to-web.svg" alt=${project.title}>
                </div>
                <h4>${project.title}</h4>
            </a>
            <a class="github-link" href="https://github.com/SarbastHesso/All-JAVASCRIPT/tree/main/${project.title}">
              <div class="img-wrapper">
                  <img src="./Octicons-mark-github.svg" alt=${project.title}>
              </div>
            </a>
        </li>
    `;
    projects.innerHTML += html;
})
