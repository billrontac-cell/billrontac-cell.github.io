const viewer = document.querySelector('#image-viewer');
let opener;
document.querySelectorAll('a.zoom').forEach(link => {
  link.addEventListener('click', event => {
    if (typeof viewer.showModal !== 'function' || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    opener = link;
    const image = link.querySelector('img');
    viewer.querySelector('img').src = link.href;
    viewer.querySelector('img').alt = image.alt;
    viewer.querySelector('p').textContent = image.alt;
    viewer.showModal();
  });
});
viewer.querySelector('button').addEventListener('click', () => viewer.close());
viewer.addEventListener('click', event => { if (event.target === viewer) viewer.close(); });
viewer.addEventListener('close', () => opener?.focus());
document.querySelector('#year').textContent = new Date().getFullYear();
