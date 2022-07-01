const images = [
  "img-001.jpg",
  "img-002.jpg",
  "img-003.jpg",
  "img-004.jpg",
  "img-005.jpg",
];

const choosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${choosenImage}`;

document.body.appendChild(bgImage);
