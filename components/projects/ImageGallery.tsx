"use client";

import { useState } from "react";
import "@/styles/gallery.css";

export default function ImageGallery({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const next = () => setCurrentIndex((index) => (index + 1) % images.length);
  const prev = () => setCurrentIndex((index) => (index - 1 + images.length) % images.length);

  return (
    <>
      <div
        className="gallery-container"
        onClick={(event) => {
          if (!(event.target as HTMLElement).closest(".gallery-nav")) setOpen(true);
        }}
      >
        <img className="gallery-image" src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
        <div className="gallery-counter">
          {currentIndex + 1} / {images.length}
        </div>
        <button
          type="button"
          className="gallery-nav gallery-prev"
          onClick={(event) => {
            event.stopPropagation();
            prev();
          }}
        >
          ‹
        </button>
        <button
          type="button"
          className="gallery-nav gallery-next"
          onClick={(event) => {
            event.stopPropagation();
            next();
          }}
        >
          ›
        </button>
      </div>
      {open ? (
        <div
          className="image-modal"
          style={{ display: "block" }}
          onClick={(event) => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
        >
          <span className="close" onClick={() => setOpen(false)}>
            &times;
          </span>
          <img className="modal-content" src={images[currentIndex]} alt="" />
          <button
            type="button"
            className="gallery-nav gallery-prev"
            style={{ position: "absolute", left: 20 }}
            onClick={(event) => {
              event.stopPropagation();
              prev();
            }}
          >
            ‹
          </button>
          <button
            type="button"
            className="gallery-nav gallery-next"
            style={{ position: "absolute", right: 20 }}
            onClick={(event) => {
              event.stopPropagation();
              next();
            }}
          >
            ›
          </button>
        </div>
      ) : null}
    </>
  );
}
