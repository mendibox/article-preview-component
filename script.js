const articleShare = document.querySelector('.article__share');
const articleAuthorIcon = document.querySelectorAll('.article__author-icon');

articleAuthorIcon.forEach.addEventListener('click', () => {
    articleShare.toggleAttribute('article__share_active');
});