import React from "react";
import "../../styles/Gallery.css"
import fear from "../../assets/image-assets/fear.png"
import franko from "../../assets/image-assets/franko.jpg"
import gandalf from "../../assets/image-assets/gandalf.jpg"
import gimli from "../../assets/image-assets/gimli.jpg"
import ring1 from "../../assets/image-assets/ring1.jpg"
import ring2 from "../../assets/image-assets/ring2.jpg"
import wallpaper1 from "../../assets/image-assets/wallpaper1.jpg"
import wallpaper2 from "../../assets/image-assets/wallpaper2.jpg"
import nature1 from "../../assets/image-assets/nature1.jpg"
import nature2 from "../../assets/image-assets/nature2.jpg"
import nature3 from "../../assets/image-assets/nature3.jpg"
import nature4 from "../../assets/image-assets/nature4.jpg"
import nature5 from "../../assets/image-assets/nature5.jpg"
import nature6 from "../../assets/image-assets/nature6.jpg"
import nature7 from "../../assets/image-assets/nature7.jpg"
import nature8 from "../../assets/image-assets/nature8.jpg"

const Gallery = () => {
    return (
        <div className="gallery">
            <img src={fear} alt="fear" />
            <img src={franko} alt="franko" />
            <img src={gandalf} alt="gandalf" />
            <img src={gimli} alt="gimli" />
            <img src={ring1} alt="ring1" />
            <img src={ring2} alt="ring2" />
            <img src={wallpaper1} alt="" />
            <img src={wallpaper2} alt="" />
            <img src={nature1} alt="nature1" />
            <img src={nature2} alt="nature2" />
            <img src={nature3} alt="nature3" />
            <img src={nature4} alt="nature4" />
            <img src={nature5} alt="nature5" />
            <img src={nature6} alt="nature6" />
            <img src={nature7} alt="nature7" />
            <img src={nature8} alt="nature8" />
        </div>
    )
}

export default Gallery;