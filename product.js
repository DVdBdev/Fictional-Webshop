const products = [
  {
    name: "65% Mechanical Keyboard",
    image: "images/65pKeyboard-removebg-preview.png",
    price: "€148",
    description:
      "A compact and versatile 65% mechanical keyboard, perfect for professionals and gamers who need a balance between size and functionality.",
    category: "keyboards",
  },
  {
    name: "Varmilo Victory 67",
    image: "images/VarmiloVictory67-removebg-preview.png",
    price: "€229",
    description:
      "Crafted with precision, the Varmilo Victory 67 features stunning aesthetics and smooth, reliable key switches for an unmatched typing experience.",
    category: "keyboards",
  },
  {
    name: "Tokyo Mousepad",
    image: "images/tokyo_mousepad-removebg-preview.png",
    price: "€30",
    description:
      "This high-quality mousepad features a sleek Tokyo cityscape design, offering a smooth surface for precise mouse control.",
    category: "accessories",
  },
  {
    name: "NuPhy Air96 V2",
    image: "images/nuphy-removebg-preview.png",
    price: "€169",
    description:
      "The NuPhy Air96 V2 offers a slim, low-profile design with tactile switches, ideal for seamless productivity and stylish setups.",
    category: "keyboards",
  },
  {
    name: "Cherry MX Red Switches (90 pcs)",
    image: "images/cherry_mx_red.png",
    price: "€45",
    description:
      "Enjoy smooth and quiet keypresses with Cherry MX Red switches, perfect for fast-paced gaming or efficient typing.",
    category: "switches",
  },
  {
    name: "Gateron Brown Switches (70 pcs)",
    image: "images/gateron_brown.png",
    price: "€40",
    description:
      "Versatile and tactile, Gateron Brown switches are ideal for both typing enthusiasts and gamers seeking a balanced experience.",
    category: "switches",
  },
  {
    name: "PBT Keycap Set - Retro Gray",
    image: "images/retro_gray_keycaps.png",
    price: "€65",
    description:
      "Upgrade your keyboard with this durable PBT keycap set in a retro gray theme, offering superior wear resistance and style.",
    category: "keycaps",
  },
  {
    name: "PBT Keycap Set - Sakura Pink",
    image: "images/sakura_pink_keycaps.png",
    price: "€69",
    description:
      "Add a touch of elegance to your setup with this Sakura Pink PBT keycap set, designed for beauty and durability.",
    category: "keycaps",
  },
  {
    name: "Ducky One 3 Mini",
    image: "images/ducky_one3mini.png",
    price: "€125",
    description:
      "Compact yet powerful, the Ducky One 3 Mini combines high-quality switches with vibrant RGB lighting for a stunning typing experience.",
    category: "keyboards",
  },
  {
    name: "Logitech G Pro X Switch Kit",
    image: "images/logitech_gprox.png",
    price: "€50",
    description:
      "Customize your gaming keyboard with the Logitech G Pro X switch kit, offering a variety of switch types for your perfect feel.",
    category: "switches",
  },
  {
    name: "Artisan Keycap - Dragon Scale",
    image: "images/artisan_dragon_scale.png",
    price: "€35",
    description:
      "This unique artisan keycap features a mesmerizing dragon scale design, perfect for adding a personal touch to your keyboard.",
    category: "keycaps",
  },
  {
    name: "SteelSeries QcK Prism Cloth XL",
    image: "images/steelseries_qck_prism.png",
    price: "€55",
    description:
      "Illuminate your gaming setup with this RGB-lit XL mousepad, providing a smooth and expansive surface for precision gameplay.",
    category: "accessories",
  },
];

function loadProduct() {
  const urlParams = new URLSearchParams(window.location.search);
  const productIndex = parseInt(urlParams.get("productIndex"));
  if (productIndex >= 0 && productIndex < products.length) {
    const product = products[productIndex];
    document.getElementById("product-category").textContent = product.category;
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-description").textContent =
      product.description;
    document.getElementById("product-price").textContent = product.price;
    document.getElementById("product-image").src = product.image;
  } else {
    document.getElementById("product-category").textContent = "";
    document.getElementById("product-name").textContent = "Product not found";
    document.getElementById("product-description").textContent = "";
    document.getElementById("product-price").textContent = "";
    document.getElementById("product-image").src = "";
  }
}

window.onload = loadProduct;
