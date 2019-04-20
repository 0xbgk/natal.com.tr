$(document).ready(function () {
    $('.submit').click(function (event) {

        var name = $('.name').val();
        var subject = $('.subject').val();
        var phone = $('.phone').val();
        var email = $('.email').val();
        var message = $('.message').val();

        if (email.length > 5 && email.includes('@') && email.includes('.')) {
            // Valid
            $('.email').removeClass('red').addClass('green ligthen-2');
        }
        else {
            // Not Valid            
            $('.email').addClass('red');
            event.preventDefault();

        }

        if (subject.length > 2) {
            // Valid
            $('.subject').removeClass('red').addClass('green ligthen-2');

        } else {
            // Not Valid
            $('.subject').addClass('red');
            event.preventDefault();

        }

        if (name.length > 2) {
            // Valid
            $('.name').removeClass('red').addClass('green ligthen-2');

        } else {
            // Not Valid
            $('.name').addClass('red');
            event.preventDefault();

        }

        if (phone.length >= 10) {
            // Valid
            $('.phone').removeClass('red').addClass('green ligthen-2');

        } else {
            // Not Valid
            $('.phone').addClass('red');
            event.preventDefault();

        }

        if (message.length > 5) {
            // Valid
            $('.message').removeClass('red').addClass('green ligthen-2');

        } else {
            // Not Valid
            $('.message').addClass('red');
            event.preventDefault();

        }

    })
})