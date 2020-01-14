// if($("#menu-left").removeClass('show')){
//     // 노란 메뉴 화면이 화면에 보이지 않는다면,
//     // = home제외 기본화면 설정값
//     // 메뉴버튼이 왼쪽에서 33%위치에 고정
//     $('#nav-btn').css({
//         left: "33%"
//     })
    
// }else{
//     $('#nav-btn').css({
//         left: "63%"
//     })
// }

$("document").ready(function(){
    
    $('#nav-btn').on('click', function(){
        $('.js-btnMenu').toggleClass('is-open')
        $('#menu-left').toggleClass('show')
    });

})