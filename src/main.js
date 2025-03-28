import './css/styles.css';
import { fetchImages } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
let lightbox;

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const searchQuery = event.target.elements['search-text'].value.trim();
    
    if (!searchQuery) {
        iziToast.error({ 
            message: 'Sorry, there are no images matching your search query. Please try again!', 
            position: 'topRight' 
        });
        return;
    }

    gallery.innerHTML = ''; 
    console.log("Галерея очищена:", gallery.innerHTML); 

    loader.style.display = 'block'; 

    try {
        const images = await fetchImages(searchQuery);

        if (images.length === 0) {
            iziToast.error({ 
                message: 'Sorry, there are no images matching your search query. Please try again!', 
                position: 'topRight' 
            });
        } else {
            renderGallery(images);
            lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
            lightbox.refresh(); 
        }
    } catch (error) {
        iziToast.error({ 
            title: 'Error', 
            message: 'Failed to fetch images. Try again later.', 
            position: 'topRight' 
        });
    } finally {
        loader.style.display = 'none'; 
    }
});