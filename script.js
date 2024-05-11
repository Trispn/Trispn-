

const viewMoreLinks = document.querySelectorAll('.view-more');

viewMoreLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const hoodie = link.parentElement;
    const moreInfo = document.querySelector('.more-info');

if (moreInfo) {
  moreInfo.classList.toggle('show');
}
  });
});

function displayHoodieDetails(hoodieDetails) {
    // Create a modal window
    const modal = document.createElement('div');
    modal.className = 'modal';

    // Add the hoodie images
    const imagesHtml = hoodieDetails.images.map((image) => {
        return `<img src="${image}" alt="${hoodieDetails.description}">`;
    }).join('');
    modal.innerHTML = imagesHtml;

    // Add the hoodie description
    const descriptionHtml = `<p>${hoodieDetails.description}</p>`;
    modal.innerHTML += descriptionHtml;

    // Add the modal to the page
    document.body.appendChild(modal);

    // Add an event listener to close the modal
    modal.addEventListener('click', () => {
        modal.remove();
    });
}



// Add event listeners to nav links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const href = link.getAttribute('href');
    document.querySelector(href).scrollIntoView();
  });
});