function openWin(){
    // 이력서 버튼 클릭 시 인포메이션 이력서 새창으로 띄우기
    window.open("https://k.kakaocdn.net/dn/bZytwg/btqBqjcKAdC/mjEzc8kYt6SOPNogSD7JPK/img.png", "이력서새창", 
    "width=730,  height=1030, toolbar=no, menubar=no, resizable=yes");
}

$("document").ready(function(){
        
    $('#nav-btn').on('click', function(){
        $('.js-btnMenu').toggleClass('is-open')
        $('#menu-left .left-wrap').fadeToggle()
        $('#home .left').fadeToggle()
    });     // header.html 의 메뉴버튼 클릭 시 설정

    $('#subBtn').on('click', function(){
        // $(this).toggleClass('toRight')
        $('.submenu').toggleClass('pageRight')
        $(this).toggleClass('btn-jittery')
        $('.js-btnMenu').toggleClass('is-open')
        $('#menu-left .left-wrap').fadeToggle()
        $('.main-left-wrap').fadeToggle()
    });     //headerSub.html 의 메뉴버튼 클릭 시 설정

    var work = $('#works .right .w-r-bottom .content .box'),
        workText = $('.txtTitle p'),
        workCont = $('.bgi');

    work.hover(function(){
        // 작업물에 호버 시 설정
        $(this).css({
            transform: "scale(0.9)"
        })
        $(this).find(workText).css("display", "none")
        $(this).find(workCont).css("opacity", "1")
    }, function(){
        // 마우스가 빠져나왔을 때 설정
        $(this).css({
            transform: "",
            backgroundColor: ""
        })
        workText.css("display", "")
        workCont.css("opacity", "")
    });

    // $(window).resize(function(){
    //     var width = $(window).width()

    //     if (width < 1024){
    //         $('#subBtn').removeClass('btn-jittery')
    //     }else{
    //         $('#subBtn').toggleClass('btn-jittery')
    //     }
    // })

})