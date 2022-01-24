export default function initModal() {
  const botaoAbrir = document.querySelector("[data-modal='abrir'");
  const botaoFechar = document.querySelector("[data-modal='fechar'");
  const containerModal = document.querySelector("[data-modal='container'");

  if (botaoAbrir && botaoFechar && containerModal) {
    //   console.log(botaoAbrir, botaoFechar, containerModal);

    function toggleModal(event) {
      event.preventDefault();
      //   console.log(event);
      containerModal.classList.toggle("ativo");
    }

    function clickForaModal(event) {
      //   console.log(this);
      //   console.log(event.target);
      if (event.target === this) {
        toggleModal(event);
      }
    }

    botaoAbrir.addEventListener("click", toggleModal);
    botaoFechar.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", clickForaModal);
  }
}
