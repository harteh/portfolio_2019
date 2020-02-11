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
        $('#main-left').toggleClass('pageRight')
        $('#main-left-wrap').fadeToggle()
        // about,works,contact 페이지 왼쪽 파란 영역 사라지게 설정
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

    $('.resume-btn').click(function(){
        //  모달창 설정
        var buttonId = $(this).attr('id');
        $('#modal-container').removeAttr('class').addClass(buttonId);
        $('body').addClass('modal-active');
    })
    
    $('#modal-container').click(function(){
        $(this).addClass('out');
        $('body').removeClass('modal-active');
    }); // 모달창 설정 끝
    

    $(window).resize(function(){
        var width = $(window).width(),
            blueSubMain = $('#main-left-wrap'),
            subBtn = $('#subBtn');

        $(window).scroll(function(){
            var height = $(document).scrollTop();

            if(width < 640 && height > 100){
                blueSubMain.css({ height: '100px'})
                subBtn.css({ top: '50px' })
            } else {
                blueSubMain.css({ height: ''})
                subBtn.css({ top: '' })
            }
        })
    })  // 모바일 화면에서 스크롤 시 메인 파란 화면 줄어듬 설정


})