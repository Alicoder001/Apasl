import { useState } from "react";
import "../sass/gallery.scss";

// Gallery rasmlarini import qilish
import img1 from "../assets/gallery/DSC02028.JPG";
import img2 from "../assets/gallery/DSC02067.JPG";
import img3 from "../assets/gallery/DSC02070.JPG";
import img4 from "../assets/gallery/DSC02077.JPG";
import img5 from "../assets/gallery/DSC02083.JPG";
import img6 from "../assets/gallery/DSC02101.JPG";
import img7 from "../assets/gallery/DSC02104.JPG";
import img8 from "../assets/gallery/DSC02106.JPG";
import img9 from "../assets/gallery/DSC02113.JPG";
import img10 from "../assets/gallery/DSC02117.JPG";
import img11 from "../assets/gallery/DSC02118.JPG";
import img12 from "../assets/gallery/DSC02120.JPG";
import img13 from "../assets/gallery/DSC02122.JPG";
import img14 from "../assets/gallery/DSC02139.JPG";
import img15 from "../assets/gallery/DSC02140.JPG";
import img16 from "../assets/gallery/DSC02144.JPG";
import img17 from "../assets/gallery/DSC02145.JPG";
import img18 from "../assets/gallery/DSC02149.JPG";
import img19 from "../assets/gallery/DSC02153.JPG";
import img20 from "../assets/gallery/DSC02163.JPG";
import img21 from "../assets/gallery/DSC02170.JPG";
import img22 from "../assets/gallery/DSC02174.JPG";
import img23 from "../assets/gallery/DSC02176.JPG";
import img24 from "../assets/gallery/DSC02180.JPG";
import img25 from "../assets/gallery/DSC02182.JPG";
import img26 from "../assets/gallery/DSC02185.JPG";
import img27 from "../assets/gallery/DSC02189.JPG";
import img28 from "../assets/gallery/DSC02194.JPG";
import img29 from "../assets/gallery/DSC02210.JPG";
import img30 from "../assets/gallery/DSC02212.JPG";
import img31 from "../assets/gallery/DSC02213.JPG";
import img32 from "../assets/gallery/DSC02217.JPG";
import img33 from "../assets/gallery/DSC02221.JPG";
import img34 from "../assets/gallery/DSC02228.JPG";
import img35 from "../assets/gallery/DSC02229.JPG";
import img36 from "../assets/gallery/DSC02230.JPG";
import img37 from "../assets/gallery/DSC02241.JPG";
import img38 from "../assets/gallery/DSC02247.JPG";

const images = [
  { src: img1, title: "Rasm 1" },
  { src: img2, title: "Rasm 2" },
  { src: img3, title: "Rasm 3" },
  { src: img4, title: "Rasm 4" },
  { src: img5, title: "Rasm 5" },
  { src: img6, title: "Rasm 6" },
  { src: img7, title: "Rasm 7" },
  { src: img8, title: "Rasm 8" },
  { src: img9, title: "Rasm 9" },
  { src: img10, title: "Rasm 10" },
  { src: img11, title: "Rasm 11" },
  { src: img12, title: "Rasm 12" },
  { src: img13, title: "Rasm 13" },
  { src: img14, title: "Rasm 14" },
  { src: img15, title: "Rasm 15" },
  { src: img16, title: "Rasm 16" },
  { src: img17, title: "Rasm 17" },
  { src: img18, title: "Rasm 18" },
  { src: img19, title: "Rasm 19" },
  { src: img20, title: "Rasm 20" },
  { src: img21, title: "Rasm 21" },
  { src: img22, title: "Rasm 22" },
  { src: img23, title: "Rasm 23" },
  { src: img24, title: "Rasm 24" },
  { src: img25, title: "Rasm 25" },
  { src: img26, title: "Rasm 26" },
  { src: img27, title: "Rasm 27" },
  { src: img28, title: "Rasm 28" },
  { src: img29, title: "Rasm 29" },
  { src: img30, title: "Rasm 30" },
  { src: img31, title: "Rasm 31" },
  { src: img32, title: "Rasm 32" },
  { src: img33, title: "Rasm 33" },
  { src: img34, title: "Rasm 34" },
  { src: img35, title: "Rasm 35" },
  { src: img36, title: "Rasm 36" },
  { src: img37, title: "Rasm 37" },
  { src: img38, title: "Rasm 38" },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="gallery-page">
      <h1 className="gallery-title">Galereya</h1>
      <div className="gallery-grid">
        {images.map((img, idx) => (
          <div
            className="gallery-card"
            key={idx}
            onClick={() => setSelected(img)}
          >
            <img src={img.src} alt={img.title} />
          </div>
        ))}
      </div>
      {selected && (
        <div className="gallery-modal" onClick={() => setSelected(null)}>
          <div
            className="gallery-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selected.src} alt={selected.title} />
          </div>
        </div>
      )}
    </div>
  );
}
