window.onload = function(){

    headerDiv = document.querySelectorAll('header > div');
    abtDiv = document.querySelectorAll('.learn-about > .container');
    cards = document.querySelectorAll('.learn-about > .card');

    headerDiv.forEach(element => {
        element.classList.add('headerdiv');
    });

    abtDiv.forEach(element => {
        element.classList.add('about-grid')
    });

    cards.forEach(element => {
        element.classList.add('about-grid card')
    });

    navHeader = document.querySelectorAll('.headerdiv > h1');
    navList = document.querySelectorAll('.headerdiv > ul');

    navHeader.forEach(element => {
        element.classList.add('flexbox-item navheader');
    });

    navList.forEach(element => {
        element.classList.add('flexbox-item navlist');
    });
}
