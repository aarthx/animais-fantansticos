export default function initTabNav() {
  const sectionsDescricoes = document.querySelectorAll(
    ".animais-descricao section"
  );
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove("ativo");
    });

    const direcao = tabContent[index].dataset.anime;
    tabContent[index].classList.add("ativo", direcao);
  }
  sectionsDescricoes.forEach((section, index) => {
    if (index % 2 === 0) {
      section.dataset.anime = "show-down";
    } else {
      section.dataset.anime = "show-right";
    }
  });

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
