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

})(jQuery, Drupal);
