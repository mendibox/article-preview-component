const authorIcon =  document.querySelector('.article__author-icon');
const authorIconActive = document.querySelector('.article__author-icon_active');
const articleShare = document.querySelector('.article__share');

authorIcon.addEventListener('click', () =>{
    articleShare.classList.toggle('article__share_active');
});

authorIconActive.addEventListener('click', () => {
    articleShare.classList.remove('article__share_active');
})