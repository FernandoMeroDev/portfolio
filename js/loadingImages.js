/* Loading images functionality
    This script optimize image loading
*/
const loadingImage = document.getElementById('loadingImage'),
      image = document.getElementById('image');

console.log(image);

image.addEventListener('load', () => {
    image.style.display = 'block';
    loadingImage.style.display = 'none';
});