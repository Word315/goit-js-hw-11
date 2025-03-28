import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function renderGallery(images) {
    const gallery = document.querySelector('.gallery');
    const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
        <li class="gallery-item">
            <a href="${largeImageURL}" data-lightbox="gallery">
                <img src="${webformatURL}" alt="${tags}" />
            </a>
            <div class="info">
                <p>Likes: ${likes} | Views: ${views} | Comments: ${comments} | Downloads: ${downloads}</p>
            </div>
        </li>
    `).join('');
    
    gallery.innerHTML = markup;
    const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
    lightbox.refresh();
}