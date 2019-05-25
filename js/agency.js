(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function(e) {
    $('.navbar').addClass('d-none');
  })
  $('.portfolio-modal').on('hidden.bs.modal', function(e) {
    $('.navbar').removeClass('d-none');
  })

})(jQuery); // End of use strict




/*-------------------------------------------------------------------------*/
/* FORM VALIDATION */
/* -----------------------------------------------------------------------*/

function formCheck() {
  $( ".js-submit" ).click( function( e ) {

      e.preventDefault();

      var $inputs = $( ".form__input input" );
      var textarea = $( ".form__input textarea" );
      var isError = false;

      $( ".form__input" ).removeClass( "error" );
      $( ".error-data" ).remove();

      for ( var i = 0; i < $inputs.length; i++ ) {
          var input = $inputs[ i ];
          if ( $( input ).attr( "required", true ) && !validateRequired( $( input ).val() ) ) {

              addErrorData( $( input ), "This field is required" );

              isError = true;
          }
          if ( $( input ).attr( "required", true ) && $( input ).attr( "type" ) === "email" && !validateEmail( $( input ).val() ) ) {
              addErrorData( $( input ), "Email address is invalid" );
              isError = true;
          }
          if ( $( textarea ).attr( "required", true ) && !validateRequired( $( textarea ).val() ) ) {
              addErrorData( $( textarea ), "This field is required" );
              isError = true;
          }
      }
      if ( isError === false ) {
          $( "#contactForm" ).submit();
      }
  } );
}

// Validate if the input is not empty
function validateRequired( value ) {
  if ( value === "" ) {
    return false;
  }
  return true;
}

// Validate if the email is using correct format
function validateEmail( value ) {
  if ( value !== "" ) {
      return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i.test( value );
  }
  return true;
}

// Add error message to the input
function addErrorData( element, error ) {
  element.parent().addClass( "error" );
  element.after( "<span class='error-data'>" + error + "</span>" );
}


/*-------------------------------------------------------------------------*/
/* AJAX FORM SUBMIT
/* Formspree now only supports AJAX for Gold Users
/* https://github.com/formspree/formspree/pull/173
/* Uncomment if you want to use AJAX Form submission and you're a gold user
/* -----------------------------------------------------------------------*/

// $( "#contactForm" ).submit( function( e ) {

//     e.preventDefault();

//     var $btn = $( ".js-submit" ),
//         $inputs = $( ".form__input input" ),
//         $textarea = $( ".form__input textarea" ),
//         $name = $( "input#name" ).val(),
//         $url = $( "#contactForm" ).attr( "action" );

//     $.ajax( {

//         url: $url,
//         method: "POST",
//         data: $( this ).serialize(),
//         dataType: "json",

//         beforeSend: function() {
//             $btn.prop( "disabled", true );
//             $btn.text( "Sending..." );
//         },
//         // eslint-disable-next-line no-unused-vars
//         success: function( data ) {
//             $inputs.val( "" );
//             $textarea.val( "" );
//             $btn.prop( "disabled", false );
//             $btn.text( "Send" );
//             openModal();
//             $( ".modal__body" ).append(
//               "<h1>Thanks " +
//               $name +
//               "!</h1><p>Your message was successfully sent! Will get back to you soon.</p>"
//             );

//         },
//         error: function( err ) {
//             $( ".modal, .modal__overlay" ).addClass( "--show" );
//             $( ".modal__body" ).append(
//               "<h1>Aww snap!</h1><p>Something went wrong, please try again. Error message: </p>" +
//               err
//             );
//         }
//     } );
// } );