function switchCharacter(id, image) {
    const target = document.getElementById(id);

    target.style.opacity = 0;

    setTimeout(() => {
        target.src = image;
        target.style.opacity = 1;
    }, 120);
}