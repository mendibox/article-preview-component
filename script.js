const authorIcon =  document.querySelector('.article__author-icon');
const authorIconActive = document.querySelector('.article__author-icon-active');
const articleShare = document.querySelector('.article__share');
const articleShareActive = document.querySelector('.article__share-active')
const shape = document.querySelector('.shape');

authorIcon.addEventListener('click', () =>{
    articleShare.classList.add('article__share-active');
    shape.classList.add('shape-active');
});

authorIconActive.addEventListener('click', () => {
    articleShare.classList.remove('article__share-active');
    shape.classList.remove('shape-active');
});