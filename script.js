const articleAuthor = document.querySelector('.article__author');
const authorIcon =  document.querySelector('.article__author-icon');
const authorIconActive = document.querySelector('.article__author-icon-active');
const articleShare = document.querySelector('.article__share');
const articleShareActive = document.querySelector('.article__share-active')

authorIcon.addEventListener('click', () =>{
    articleAuthor.classList.add('article__author-active');
    articleShare.classList.add('article__share-active');
});

authorIconActive.addEventListener('click', () => {
    articleShare.classList.remove('article__share-active');
    articleAuthor.classList.remove('article__author-active');
});