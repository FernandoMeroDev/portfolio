/* Loading images functionality
    This script optimize image loading
*/

function optimizeLoad(loadingElement, loadedElement){
    loadedElement.addEventListener('load', () => {
        loadedElement.style.display = 'block';
        loadingElement.style.display = 'none';
    });
}

// Optimize Photo load
const loadingPhoto = document.getElementById('loadingPhoto'),
      loadedPhoto = document.getElementById('loadedPhoto');

optimizeLoad(loadingPhoto, loadedPhoto);

// Optimize Projects Images load
const loadingImages = document.getElementsByClassName('loadingProjectImage'),
      loadedImages = document.getElementsByClassName('loadedProjectImage');

for(let i = 0; i < loadedImages.length; i++){
    optimizeLoad(loadingImages[i], loadedImages[i]);
}

// Optimize Icons load
const loadingIcons = document.getElementsByClassName('loading-icon'),
      loadedIcons = document.getElementsByClassName('loaded-icon');

for(let i = 0; i < loadedIcons.length; i++){
    optimizeLoad(loadingIcons[i], loadedIcons[i]);
}