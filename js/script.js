//toggle class active

const navbarNav = document.querySelector('.navbar-nav');

//hamburger menu d klik
document.querySelector('#hamburger-menu').onclick = () => { 
    navbarNav.classList.toggle('active');
};

// Klik di luar menu untuk menghilangkan

const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})

