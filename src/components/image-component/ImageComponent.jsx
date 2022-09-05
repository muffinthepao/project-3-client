import PlaceholderImg from "../image-component/placeholder.png"

function ImageComponent(imgURL) {
    return (imgURL ? imgURL : PlaceholderImg)
}

export default ImageComponent