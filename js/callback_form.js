document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.getElementById("openModal");
    const closeBtn = document.getElementById("closeModal");
    const overlay = document.getElementById("modalOverlay");

    openBtn.addEventListener("click", () => {
        overlay.classList.add("active");
        document.body.classList.add("modal-open");
    });

    closeBtn.addEventListener("click", () => {
        overlay.classList.remove("active");
        document.body.classList.remove("modal-open");
    });

    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
            overlay.classList.remove("active");
            document.body.classList.remove("modal-open");
        }
    });
});