$('.portfolio button').click(function (e) {
    e.preventDefault();
    // this la button duoc click
    //  tang performance (hieu suat)
    if ($(this).hasClass('active')) {
        return;
    }
    //remove class active ra khoi button dang active
    $('button.active').removeClass('active');
    //add class active vao button duoc click
    $(this).addClass('active');
    const dataValue = $(this).attr('data');
    const allDivs = $('.portfolio > .row > div'); // 8div
    if (dataValue == 'all') {
        allDivs.show();// hien thi 8 div
        return;
    }
    const showDivs = $(`.portfolio > .row > div[data = ${dataValue}]`);
    const hideDivs = allDivs.not(showDivs);
    showDivs.show();//display:block
    hideDivs.hide();//display:none
});


$(window).scroll(function () {
    // $(window).scrollTop() là top của cửa sổ trình duyệt so với top của document (trang web)
    // .offset().top) là khoảng cách của top phần tử đến top của document (trang web)
    // console.log('top của window', $(window).scrollTop());
    // console.log('top của portfolio', $('#portfolio').offset().top);
    if ($(window).scrollTop() >= $('#portfolio').offset().top) {
        console.log('menu sổ xuống');
        $('.navbar').addClass('fixed-top');
        $('header').addClass('dummy-padding-top');
    }
    else {
        console.log('menu thường');
        $('.navbar').removeClass('fixed-top');
        $('header').removeClass('dummy-padding-top');
    }
});