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
        //메뉴:노란배경 화면 나타나게 설정
        $('.main-left-wrap').fadeToggle()
        // about,works,contact 페이지 왼쪽 파란 영역 사라지게 설정

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
        
        if (width < 640){
            // 화면 가로값이 640px 보다 작을 때
            $('#nav-btn').on('click', function(){
                // 메인화면의 메뉴버튼 클릭 시 설정
                // $('.submenu').removeClass('pageRight')
                // $('#menu-left .left-wrap').toggleClass('pageDown')
            })
            $('#subBtn').on('click', function(){
                // 서브페이지들의 메뉴버튼 클릭 시 설정
                // alert("sdf")
                // $('.submenu').removeClass('pageRight')
                // $('#menu-left').toggleClass('pageDown')
            })
        }else{

        }
    })

})