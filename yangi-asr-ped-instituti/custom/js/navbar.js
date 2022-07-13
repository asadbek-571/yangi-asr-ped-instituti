// /** code by webdevtrick ( https://webdevtrick.com ) **/
// (function($) {
//     $(function() {
//         $('nav ul li a:not(:only-child)').click(function(e) {
//             $(this).siblings('.nav-dropdown').toggle();
//             $('.dropdown').not($(this).siblings()).hide();
//             e.stopPropagation();
//         });
//         $('html').click(function() {
//             $('.nav-dropdown').hide();
//         });
//         $('#nav-toggle').click(function() {
//             $('nav ul').slideToggle();
//         });
//         $('#nav-toggle').on('click', function() {
//             this.classList.toggle('active');
//         });
//     });
// })(jQuery);

function clearPage(){
    localStorage.removeItem('current-page')
}

function page(pageType){
    localStorage.setItem("pageType", pageType)
}

(function ($) {
    $(function () {

        //  open and close nav
        $('#navbar-toggle').click(function () {
            $('nav ul').slideToggle();
            let classList = $('.menu-wrapper')[0].classList;
            if (classList.contains('d-none')){
                classList.remove('d-none');
            }else {
                classList.add('d-none')
            }
        });


        // Hamburger toggle
        $('#navbar-toggle').on('click', function () {
            this.classList.toggle('active');
        });


        // If a link has a dropdown, add sub menu toggle.
        $('nav ul li a:not(:only-child)').click(function (e) {
            $(this).siblings('.navbar-dropdown').slideToggle("slow");

            // Close dropdown when select another dropdown
            $('.navbar-dropdown').not($(this).siblings()).hide("slow");
            e.stopPropagation();
        });


        // Click outside the dropdown will remove the dropdown class
        $('html').click(function () {
            $('.navbar-dropdown').hide();
        });
    });
})(jQuery);