// $('.portfolio-menu ul li').click(function(){
//     $('.portfolio-menu ul li').removeClass('active');
//     $(this).addClass('active');
    
//     var selector = $(this).attr('data-filter');
//     $('.portfolio-item').isotope({
//         filter:selector
//     });
//     return  false;
// });
// $(document).ready(function() {
//     var popup_btn = $('.popup-btn');
//     popup_btn.magnificPopup({
//         type : 'image',
//         gallery : {
//             enabled : true
//         }
//     });

//     var selector = $('.vids').attr('data-filter');
//     $('.portfolio-item').isotope({
//         filter:selector
//     });
//     return  false;
// });


$(document).ready(function() {
    // Function to load Google Drive images
    function loadGoogleDriveImages() {
        $('.portfolio-item img').each(function() {
          var $img = $(this);
          var src = $img.attr('src');
          if (src.includes('drive.google.com')) {
            var proxyUrl = '/proxy-image?url=' + encodeURIComponent(src);
            $img.attr('src', proxyUrl);
          }
        });
      }

    // Existing click handler for portfolio menu items
    $('.portfolio-menu ul li').click(function(){
        $('.portfolio-menu ul li').removeClass('active');
        $(this).addClass('active');
        
        var selector = $(this).attr('data-filter');
        $('.portfolio-item').isotope({
            filter: selector
        });
        return false;
    });

    // Magnific Popup setup
    var popup_btn = $('.popup-btn');
    popup_btn.magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    // Initial filter setup
    var selector = $('.vids').attr('data-filter');
    $('.portfolio-item').isotope({
        filter: selector
    });

    // Load Google Drive images
    loadGoogleDriveImages();

    // Re-layout Isotope after images are loaded
    $('.portfolio-item').imagesLoaded().progress(function() {
        $('.portfolio-item').isotope('layout');
    });
});