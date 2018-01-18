// Sidebar
$(document).ready(function () {

  var hamburger = $('.sidebar__hamburger'),
      sidebar = $('#sidebar'),
      windowWidth = window.innerWidth,
      toggledClass = 'sidebar--closed',
      overlayToggledClass = 'visible',
      hamburgerToggledClass = 'closed opened',
      hamburgerClosedClass = 'closed',
      hamburgerOpenedClass = 'opened',
      overlay = $('.sidebar__overlay'),
      breakpoint = 1200,
      collapsibleElements = $('.sidebar, header, .search, main');

  function toggleSidebar() {
    
    hamburger.click(function () {
      collapsibleElements.toggleClass(toggledClass);
      $(this).toggleClass(hamburgerToggledClass);

      if (windowWidth < breakpoint) {
        overlay.toggleClass(overlayToggledClass);
        sidebar.css('opacity', 1);
      } else {
        $(window).scroll();
      }
    });

    overlay.click(function () {
      collapsibleElements.toggleClass(toggledClass);
      hamburger.toggleClass(hamburgerToggledClass);
      $(this).toggleClass(overlayToggledClass);
    });

    sizeControl();
  }

  function sizeControl() {
    windowWidth = window.innerWidth;
    overlay.removeClass(overlayToggledClass);
    if (windowWidth < breakpoint) {
      collapsibleElements.addClass(toggledClass);
      hamburger.removeClass(hamburgerOpenedClass);
      hamburger.addClass(hamburgerClosedClass);
      hamburger.removeClass('sidebar__hamburger--negative');
    } else {
      collapsibleElements.removeClass(toggledClass);
      hamburger.removeClass(hamburgerClosedClass);
      hamburger.addClass(hamburgerOpenedClass);
    }
  }

  toggleSidebar();

  $( window ).resize(sizeControl);
});
