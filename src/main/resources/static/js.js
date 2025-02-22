/* LOGIN */
const login = document.getElementById('login_container');
const user = document.getElementById('user');
const password = document.getElementById('password');

// login.addEventListener('submit', (e) => {

//     e.preventDefault();

//     if(user.value === "shoro" && password.value === 123 ) {

//     }

// });

/* MENU */
const menuWrapper = document.getElementById('menu_wrapper');
const buttonMenu = document.getElementById('button_menu');
const menu = document.getElementById('menu');

buttonMenu.addEventListener('click', () => {
    
    if(menu.classList.contains('open') ){
        menu.classList.remove('open');
        menuWrapper.classList.remove('expanded');
    } else {
        menu.classList.add('open');
        menuWrapper.classList.add('expanded');
    }
});
