$('header').load('include/header.html',function(){

    let pageUrl = window.location.href;

    $('.lnb a').each(function(){
        let aHref = $(this).attr('href');
        if(pageUrl.indexOf(aHref) !== -1){
            $(this).parent().addClass('on');
            let text2 = $(this).text();
            $('#section_box_sub h2').text(text2);

            let text1 = $(this).parents('.lnb').siblings('a').text();
            $('.page_title').text(text1);
        }
    })
})

$('footer').load('include/footer.html')



function bar(){
    let scrT = $(window).scrollTop();
    let winW = $(window).width();
    let winH = $(window).height();
    let docH = $(document).height();
    let ratio = winW / (docH-winH);
    $('.bar').width(scrT * ratio);
}
function bar2(){
    let scrT = $(window).scrollTop();
    let prog2 = $('.page_progress2').height();
    let winH = $(window).height();
    let docH = $(document).height();
    let ratio = prog2 / (docH-winH);
    $('.bar2').height(scrT * ratio);
}

$(window).scroll(function(){
    bar()
    bar2()
})

$(window).resize(function(){
    bar()
    bar2()
})

$('#section2 .review_box li .ex').each(function(){
    let exText = $(this).text()
    console.log(exText)
    let exTextVal = exText.substring(0,100)
    console.log(exTextVal)

    if(exText.length > 100){
    $(this).text(exTextVal + '...')
    }

})

