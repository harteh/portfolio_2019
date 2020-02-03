function openWin(){
    // 이력서 버튼 클릭 시 인포메이션 이력서 새창으로 띄우기
    window.open("https://k.kakaocdn.net/dn/bZytwg/btqBqjcKAdC/mjEzc8kYt6SOPNogSD7JPK/img.png", "이력서새창", 
    "width=730,  height=1030, toolbar=no, menubar=no, resizable=yes");
}

$("document").ready(function(){
        
    $('#nav-btn').on('click', function(){
        $('.js-btnMenu').toggleClass('is-open')
        $('#home-menu-left .home-menu-wrap').fadeToggle()
        // $('#home .left').fadeToggle()
    });     // header.html 의 메뉴버튼 클릭 시 설정

    $('#subBtn').on('click', function(){
        $(this).toggleClass('btnRight')
        $(this).toggleClass('btn-jittery')
        $('.js-btnMenu').toggleClass('is-open')
        $('#main-left-wrap').fadeToggle()
        // about,works,contact 페이지 왼쪽 파란 영역 사라지게 설정
        $('#main-left').toggleClass('pageRight')
        $('#sub-menu-wrap').fadeToggle()
        //메뉴:노란배경 화면 나타나게 설정

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

    $(window).resize(function(){
        var width = $(window).width();


        if( width < 1024, width > 641){
            $('#subBtn').on('click', function(){
                $(this).removeClass('btnRight')
                $(this).toggleClass('btnTabRight')
            })
        }
        
        // if (width < 640){
        //     $('#subBtn').on('click', function(){
        //         $(this).removeClass('btnRight')
        //         $(this).toggleClass('pageDown')
        //     })  // 서브페이지들의 메뉴버튼 클릭 시 설정
        // }
    })

})