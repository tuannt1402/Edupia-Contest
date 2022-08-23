function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) { elmnt.innerHTML = this.responseText; }
          if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
          /* Remove the attribute, and call this function once more: */
          el
          mnt.removeAttribute("include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}


$(document).ready(function () {
  // Bấm vào đăng nhập thì hiện ra khung ben trang chooseprovince mobile
  let navMobile = $('.nav-mobile-login-list');

  function letCloseNav(e) {
    $('.nav-mobile-login-viewmobile-frame').find('svg').first().on('click', function () {
      navMobile.css({
        right: '100%'
      })
      $('body').removeClass('no-scroll');
      $('.nav-mobile-login').removeClass('opacity-background');
      $('.choose-province-cover-pop-up').removeClass('opacity-background');
    })

    $('.nav-mobile-login-viewmobile-frame-right').on('click', function () {
      $('body').removeClass('no-scroll');
      $('.nav-mobile-login').removeClass('opacity-background');
      $('.choose-province-cover-pop-up').removeClass('opacity-background');
      navMobile.css({
        right: '100%'
      })
    })
  }

  $('.list-login-form-choose-province').on('click', function openNav(e) {
    navMobile.css({
      right: '0%'
    })
    $('body').addClass('no-scroll');
    $('.nav-mobile-login').addClass('opacity-background');
    $('.choose-province-cover-pop-up').addClass('opacity-background');
    letCloseNav(e);
  })

  // Bấm vào xem thêm thì hiện ra thêm 7 xếp hạng bên bảng xếp hạng mobile
  let isClicked = true;
  $('.btn-join-ranking').on('click', function openMoreListRanking() {
    if (isClicked) {
      $('.other-number').each(function (index, elements) {
        $(elements).slideDown();
      })
      return isClicked = !isClicked;
    } else {
      $('.other-number').each(function (index, elements) {
        $(elements).slideUp();
      })
      isClicked = true;
    }
  })


  // Web-game
  let resizePixed = (window.innerWidth / 16 * 9);
  $(window).on('resize', function changeResize(e) {
    resizePixed = (window.innerWidth / 16 * 9);
    transform();
  })
  // Thay đổi kích cỡ của web games
  transform();

  function transform() {
    if (window.screen.height >= 768) {
      $('.web-game-container').css({
        transform: 'scale(' + (window.screen.width) / 1366 + ')'
      })
    } else {
      $('.web-game-container').css({
        transform: 'scale(' + (window.screen.height) / 768 + ')'
      })
    }
  }
  transform();
});
