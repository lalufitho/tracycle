const DrawerInitiator = {
  init({ menuButton, closeMenu, drawer }) {
    const navBeranda = document.getElementsByClassName('nav__item')[0];
    const navBankSampah = document.getElementsByClassName('nav__item')[1];
    const navDaurUlang = document.getElementsByClassName('nav__item')[2];
    const navTentang = document.getElementsByClassName('nav__item')[3];
    const navKontak = document.getElementsByClassName('nav__item')[4];

    function drawerToggle(element, method) {
      element.addEventListener('click', (event) => {
        method(event, drawer);
      });
    }

    drawerToggle(menuButton, this._toggleDrawer);
    drawerToggle(closeMenu, this._closeDrawer);
    drawerToggle(navBeranda, this._closeDrawer);
    drawerToggle(navBankSampah, this._closeDrawer);
    drawerToggle(navDaurUlang, this._closeDrawer);
    drawerToggle(navTentang, this._closeDrawer);
    drawerToggle(navKontak, this._closeDrawer);
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
    document.body.style.overflow = 'hidden';
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
    document.body.style.overflow = 'scroll';
  },
};

export default DrawerInitiator;
