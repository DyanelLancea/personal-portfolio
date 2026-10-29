export function openImageModal(src: string) {
  const modal = document.createElement("div");
  modal.className = "image-modal";
  modal.style.display = "block";
  modal.innerHTML = `
    <span class="close">&times;</span>
    <img class="modal-content" src="${src}" alt="">
  `;
  document.body.appendChild(modal);

  const close = () => {
    modal.remove();
  };

  window.setTimeout(() => {
    modal.querySelector(".close")?.addEventListener("click", (event) => {
      event.stopPropagation();
      close();
    });
  }, 0);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) close();
  });
}
