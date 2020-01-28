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

})