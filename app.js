const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover", (event) => {
    const xxx = (event.pageX - btnEl.offsetLeft);
    const yyy = (event.pageY - btnEl.offsetTop);

    console.log(xxx, yyy);

    btnEl.style.setProperty("--xPos", xxx + "px")
    btnEl.style.setProperty("--yPos", yyy + "px")

})
