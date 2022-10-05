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
  // Bấm vào đăng nhập thì hiện ra khung tren tat ca cac trang
  let navMobile = $('.nav-mobile-login-viewmobile');
  let navMobileBackground = $('.nav-mobile-login-viewmobile-frame-right');

  function letCloseNav(e) {
    $('.nav-mobile-login-viewmobile-frame').find('svg').first().on('click', function () {
      navMobile.css({
        right: '100%'
      })
      $('body').removeClass('no-scroll');
      $(navMobileBackground).removeClass('opacity-nav');
      $('.container-header').removeClass('opacity-background');
      $('.container-contest').removeClass('opacity-background')
      $('.cover-chooseprovince-content').removeClass('opacity-background');
      $('.container-round-of-exams').removeClass('opacity-background');
      $('.container-content').removeClass('opacity-background');
      $('.container-information').removeClass('opacity-background');
      $('.team-container').removeClass('opacity-background');
      $('.team-content').removeClass('opacity-background');
    })

    $('.nav-mobile-login-viewmobile-frame-right').on('click', function () {
      $('body').removeClass('no-scroll');
      $(navMobileBackground).removeClass('opacity-nav');
      $('.container-header').removeClass('opacity-background');
      $('.container-contest').removeClass('opacity-background');
      $('.cover-chooseprovince-content').removeClass('opacity-background');
      $('.container-round-of-exams').removeClass('opacity-background');
      $('.container-content').removeClass('opacity-background');
      $('.container-information').removeClass('opacity-background');
      $('.team-container').removeClass('opacity-background');
      $('.team-content').removeClass('opacity-background');
      navMobile.css({
        right: '100%'
      })
    })
  }

  $('.nav-mobile-login-list').on('click', function openNav(e) {
    $(navMobile).addClass('transition');
    navMobile.css({
      right: '0%'
    })
    $('body').addClass('no-scroll');
    $(navMobileBackground).addClass('opacity-nav');
    $('.container-header').addClass('opacity-background');
    $('.container-contest').addClass('opacity-background')
    $('.cover-chooseprovince-content').addClass('opacity-background');
    $('.container-round-of-exams').addClass('opacity-background');
    $('.container-content').addClass('opacity-background');
    $('.container-information').addClass('opacity-background');
    $('.team-container').addClass('opacity-background');
    $('.team-content').addClass('opacity-background');
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

  // Bấm vào đăng ký dưới thì trượt thanh cuộn lên
  $('#top-page').on('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  })

  // Bấm vào vòng thi mobile thi trượt line-mobile
  $('.img-mobile').each(function (index, ele) {
    $(ele).on('click', function () {
      if (index == 0) {
        $('.line-mobile').css({
          left: '0%'
        })
      } if (index == 1) {
        $('.line-mobile').css({
          left: '25%'
        })
      } if (index == 2) {
        $('.line-mobile').css({
          left: '50%'
        })
      } if (index == 3) {
        $('.line-mobile').css({
          left: '75%'
        })
      }
    })
  })

  // Initialize tooltips
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })

  //Bấm vào xem chi tiết laptop thì quay mũi tên và hiện ra bảng
  let currentExpandIndex = -1;
  let delayClicked = true;
  let activeFunctionOneTime = true;

  function collapseAll() {
    $('.btn-laptop span svg').removeClass('tranform-arrow-rotate');
    $('.line').removeClass('line-move');
  }

  function expand(index) {
    $($('.line')[index]).addClass('line-move');
    $($('.btn-laptop span svg')[index]).addClass('tranform-arrow-rotate');
  }

  function btnClicked(index) {
    setTimeout(() => {
      delayClicked = true;
    }, 350);
    collapseAll();
    if (index === currentExpandIndex) {
      currentExpandIndex = -1;
      return;
    }
    expand(index);
    currentExpandIndex = index;
  }

  $('.btn-laptop').each(function (index, ele) {
    if (activeFunctionOneTime) {
      btnClicked(index);
      activeFunctionOneTime = !activeFunctionOneTime;
    }

    $(ele).on('click', function () {
      if (delayClicked) {
        delayClicked = !delayClicked;
        btnClicked(index);
      }
    })
  })

  // Bấm vào xem thêm thì hiện ra thêm 7 xếp hạng bên bảng xếp hạng mobile cuộc thi đồng đội
  function buttonTeam() {
    let isClicked = true;
    $('.btn-team-ranking').on('click', function openMoreListRanking() {
      if (isClicked) {
        $('.team-other-number').each(function (index, elements) {
          $(elements).slideDown();
          $(elements).css({
            display: 'flex'
          })
        })
        return isClicked = !isClicked;
      } else {
        $('.team-other-number').each(function (index, elements) {
          $(elements).slideUp();
        })
        isClicked = true;
      }
    })
  }
  buttonTeam();

  // Media col trong cuộc thi đồng đội
  function myFunction(x) {
    if (x.matches) { // If media query matches
      $($('.team-col-data')[0]).addClass('d-flex');
      $($('.team-col-data')[1]).addClass('d-flex');
      $($('.team-col-data')[2]).addClass('d-flex');
    } else {
      $($('.team-col-data')[0]).removeClass('d-flex');
      $($('.team-col-data')[1]).removeClass('d-flex');
      $($('.team-col-data')[2]).removeClass('d-flex');
    }
  }

  var x = window.matchMedia("(max-width: 991px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes

  // $($('.line')[0]).addClass('line-move');
  // $($('.btn-laptop span svg')[0]).addClass('tranform-arrow-rotate');


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
