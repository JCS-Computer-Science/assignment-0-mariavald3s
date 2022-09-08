let index = 0;

function changeImg(img) {
    const images = ["./assets/corg1.jpg", "./assets/corg2.jpg", "./assets/corg3.jpg"]
    index = index + 1;
    img = images.findIndex(index)
}