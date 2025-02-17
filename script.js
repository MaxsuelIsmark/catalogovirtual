function expandImage(img) {
    const modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100vw";
    modal.style.height = "100vh";
    modal.style.background = "rgba(0, 0, 0, 0.8)";
    modal.style.display = "flex";
    modal.style.alignItems = "center";
    modal.style.justifyContent = "center";
    modal.innerHTML = `<img src="${img.src}" style="max-width: 90%; max-height: 90%;">`;
    modal.onclick = () => document.body.removeChild(modal);
    document.body.appendChild(modal);
}
function scrollToProducts(event) {
    event.preventDefault();
    document.getElementById("produtos").scrollIntoView({ behavior: "smooth" });
}