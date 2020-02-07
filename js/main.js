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
            blueSub = $('#main-left'),
            blueSubMain = $('#main-left-wrap'),
            subBtn = $('#subBtn'),
            lowSubBtn = $('.btnRight');        
        // 창의 가로길이가 640px 보다 작을때 설정
        if(width < 640) {

            $(window).scroll(function(){
                var height = $(document).scrollTop(); // 스크롤의 높이 측정
                
                if(height > 100){
                    // 스크롤 탑이 100px보다 클때(내려가면) 설정
                    // 서브페이지들의 파란영역의 세로값을 좁게 변경.
                    // 버튼 위치도 파란영역과 같은 높이로 변경.
                    blueSubMain.css({ height: '100px'})
                    subBtn.css({ top: '50px' })
                } else if(height < 100) {
                    // 스크롤 탑이 100px보다 작을때(올라가면) 설정
                    // 파란영역의 세로값과 버튼의 높이가 원래 설정값으로 돌아감.
                    blueSubMain.css({ height: '320px' })
                    subBtn.css({ top: '270px' })
                }
                
            })
        } else if(width > 641){
            // 창의 가로길이가 640px 보다 작지않을 때 설정
            blueSubMain.css({ height: '100% ' })
            subBtn.css({ top: ' 75vh' })
        }
    });

})