window.onload = function(){

    headerDiv = document.querySelectorAll('header > div');
    abtDiv = document.querySelectorAll('.learn-about > .container');
    cards = document.querySelectorAll('.learn-about > .card');
    abth2 = document.querySelectorAll('.learn-about > h2');

    headerDiv.forEach(element => {
        element.classList.add('headerdiv');
    });

    abth2.forEach(element => {
        element.classList.add('header');
    });


    abtDiv.forEach(element => {
        element.classList.add('about-grid')
    });

    cards.forEach(function(element, index, list) {
        element.classList.add('card' + index)
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
