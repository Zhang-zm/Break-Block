function imageFromPath(path) {
    let img = new Image();

    img.src = path;
    return img;
}

export { imageFromPath };
