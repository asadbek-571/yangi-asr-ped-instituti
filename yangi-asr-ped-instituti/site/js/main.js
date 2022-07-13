$(document).ready(function () {
    $('#minHeight').css({
        'minHeight': $(window).outerHeight() - $('header').outerHeight() - $('footer').outerHeight() + 'px'
    });

    $('input#payment2').parent().change(function () {
        if ($('input#payment2').is(":checked")) {
            $('.payment__type').addClass('online');
        } else {
            $('.payment__type').removeClass('online');
        }
    });

    $(".select2__js").select2({
        minimumResultsForSearch: -1,
    });

    $.mask.definitions['9'] = '';
    $.mask.definitions['d'] = '[0-9]';
    $("input[type='tel']").mask("998 dd ddd dd dd");

    $(".passport1").mask("aa");

    $(".passport2").mask("ddd dd dd");
    $(".jshshir").mask("dd dd dd dd dd dd dd");
    $(".End_year_education").mask("dddd");

    if ($(window).width() < 1023) {
        $(".mobile__menu .body").append($("header .language .body_dropdown"));
        // $(".mobile__menu .body .body_dropdown").append($("header .language span"));
        $(".mobile__menu .body").append($("header .header__nav"));
        $(".mobile__menu .body").append($("header .show__result"));

        $(document).on("click", ".hamburger", function () {
            $("body").addClass("opened");
        });

        $("body").click(function (e) {
            if (
                !$(e.target).is(
                    ".hamburger *,.hamburger"
                )
            ) {
                $("body").removeClass("opened");
            }
        });
    }



    $('#myDropdown .btn_toggle').on('click', function (e) {
        e.preventDefault();
        $(this).next().toggleClass('show');
    });


    $("body").click(function (e) {
        if (
            !$(e.target).is(
                "#myDropdown .btn_toggle *,#myDropdown .btn_toggle"
            )
        ) {
            $("#myDropdown .dropdown__menu").removeClass("show");
        }
    });

});






