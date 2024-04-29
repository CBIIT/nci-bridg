/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.nci_barrio = {
    attach: function (context, settings) {
      const nciNavLink = document.querySelectorAll(".nci-header-nav li .nci-button");
      nciNavLink.forEach((button) => {
        button.addEventListener('click', function (e) {
          e.preventDefault();

          if (button.getAttribute("aria-expanded") === "true" && button.nextElementSibling.getAttribute("aria-hidden") === "false") {
            button.setAttribute("aria-expanded", false)
            button.nextElementSibling.setAttribute("aria-hidden", true);

          } else {
            closeDropdown();

            button.setAttribute("aria-expanded", true)
            button.nextElementSibling.setAttribute("aria-hidden", false);
          }
        });
      })

      window.addEventListener('click', function (e) {
        if (e.target.closest('.nci-header-nav .nci-header-nav__primary') === null) {
          closeDropdown();
        }
      });

      function closeDropdown() {
        nciNavLink.forEach(function (menu) {
          menu.setAttribute("aria-expanded", false)
          menu.nextElementSibling.setAttribute("aria-hidden", true);
        });
      }
    }
  };

  const accordionButton = document.querySelectorAll('.usa-accordion__button');
  accordionButton.forEach((button) => {
    var content = button.parentElement.nextElementSibling;
    content.style.display = "none";

    button.addEventListener('click', function (e) {
      e.target.setAttribute("aria-expanded", true)
      if (content.style.display === "none") {
        e.target.setAttribute("aria-expanded", true)
        content.style.display = "block"
      } else {
        content.style.display = "none"
        e.target.setAttribute("aria-expanded", false)
      }
    });
  })

  const mobilenavButton = document.querySelector('.nci-header-mobilenav__open-btn');
  const mobilenav = document.querySelector('.nci-header-mobilenav');
  const mobilenavOverlay = document.querySelector('.nci-header-mobilenav__overlay');
  const mobilenavClose = document.querySelector('.nci-header-mobilenav__close-btn');
  const body = document.getElementsByTagName('body');
  const mobileSubMenu = document.querySelectorAll('.nci-header-mobilenav__list-label');

  mobilenavButton.addEventListener('click', function(e) {
    mobilenav.classList.toggle('active');
    mobilenavOverlay.classList.toggle('active');
    body[0].classList.toggle('mobile-menu-open');
  })

  mobilenavClose.addEventListener('click', function(e) {
    mobilenav.classList.remove('active');
    mobilenavOverlay.classList.remove('active');
    body[0].classList.remove('mobile-menu-open');
  })

  mobileSubMenu.forEach((subItem) => {
    subItem.addEventListener('click', function (e) {
      e.preventDefault();
      subItem.parentElement.classList.toggle('submenu-open');
    });
  })

  let lastKnownScrollPosition = 0;
  const returnToTop = document.querySelector('.usa-footer__nci-return-to-top');
  document.addEventListener("scroll", function() {
    lastKnownScrollPosition = window.scrollY;
    if(lastKnownScrollPosition > 20) {
      returnToTop.classList.remove('hide');
      returnToTop.classList.add('show');
    } else {
      returnToTop.classList.remove('show');
      returnToTop.classList.add('hide');
    }
  })


})(jQuery, Drupal);
