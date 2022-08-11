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
          elmnt.removeAttribute("include-html");
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
  // Bấm vào đăng nhập thì hiện ra khung 
  let navMobile = $('.nav-mobile-login-viewmobile');

  function letCloseNav(e) {
    $('.nav-mobile-login-viewmobile-frame').find('svg').first().on('click', function () {
      navMobile.css({
        right: '100%'
      })
      $('body').removeClass('no-scroll');
      $('.nav-mobile-login').removeClass('opacity-background');
      $('.choose-province-cover-pop-up').removeClass('opacity-background');
    })

    $('.nav-mobile-login-viewmobile-frame-right').on('click',function() {
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
});


