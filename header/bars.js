//자바스크립트로 구현
/*let navbar_toggleBtn = document.querySelector(".navbar_toggleBtn")
let menu = document.querySelector(".navbar_menu")

//버튼 눌렀을때 클릭 이벤트 발생
navbar_toggleBtn.addEventListener('click', function(){
  //active라는 이름의 클래스를 추가/삭제 동시에 함
  menu.classList.toggle('active');
})*/

//제이쿼리로 구현
$(document).ready(function(){
  // alert("test...");
  //toggle(), toggleClass();
  $(".navbar_toggleBtn").click(function(){
    $(".navbar_menu").toggle("active");
  });
  //pc 해상도에서 상단 메뉴가 보이지 않을때 처리
$(window).resize(function(){
  if(parseInt($("nav").css("width")) > 768){
    $(".navbar_menu").css("display", "");
  }else{
    $(".navbar_menu").css("display", "none");
  }
})
})




