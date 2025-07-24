import { shuffle } from '../utils/shuffle';

// Import all images from each category folder
const casualImages = import.meta.glob('../assets/products/casual/*.jpg', { eager: true });
const formalImages = import.meta.glob('../assets/products/formal/*.jpg', { eager: true });
const slidesImages = import.meta.glob('../assets/products/slides/*.jpg', { eager: true });
const sneakersImages = import.meta.glob('../assets/products/sneakers/*.jpg', { eager: true });
const womenImages = import.meta.glob('../assets/products/women/*.jpg', { eager: true });

// Helper to get image by index
function getImage(imagesObj, prefix, i) {
    return imagesObj[`../assets/products/${prefix}/${prefix}_${i + 1}.jpg`]?.default ||
        imagesObj[`../assets/products/${prefix}/${prefix}_${i + 1}.jpg`];
}

const casual = Array.from({ length: 2 }, (_, i) => ({
    id: `casual_${i + 1}`,
    name: `Casual Shoe ${i + 1}`,
    category: 'Casual',
    image: getImage(casualImages, 'casual', i),
}));

const formal = Array.from({ length: 2 }, (_, i) => ({
    id: `formal_${i + 1}`,
    name: `Formal Shoe ${i + 1}`,
    category: 'Formal',
    image: getImage(formalImages, 'formal', i),
}));

const slides = Array.from({ length: 3 }, (_, i) => ({
    id: `slides_${i + 1}`,
    name: `Slides ${i + 1}`,
    category: 'Slides',
    image: getImage(slidesImages, 'slides', i),
}));

const sneakers = Array.from({ length: 3 }, (_, i) => ({
    id: `sneakers_${i + 1}`,
    name: `Sneakers ${i + 1}`,
    category: 'Sneakers',
    image: getImage(sneakersImages, 'sneakers', i),
}));

const women = Array.from({ length: 2 }, (_, i) => ({
    id: `women_${i + 1}`,
    name: `Women ${i + 1}`,
    category: 'Women',
    image: getImage(womenImages, 'women', i),
}));

const allProducts = [...casual, ...formal, ...slides, ...sneakers, ...women];
export const featuredProducts = shuffle(allProducts);
