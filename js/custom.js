// top
$(function(){

    const btt = document.querySelector("#to_top");
    let scrollAmount;
    window.addEventListener("scroll", function () {
      scrollAmount = this.scrollY;
      if (scrollAmount > scrollAmount / 5) {
        btt.classList.add("visible");
      } else {
        btt.classList.remove("visible");
      }
    })
})

//gnb
let win = window,
  winSct,
  sections = document.querySelectorAll("section"),
  gnb = document.querySelectorAll(".gnb li");

const gnbOff = () => {
  gnb.forEach((o) => {
    o.classList.remove("on");
  });
};

gnb.forEach((el) => {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelector(el.firstChild.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
    gnbOff();
    el.classList.add("on");
  });
});

win.addEventListener("scroll", function (e) {
  e.preventDefault();
  winSct = this.scrollY;
  winSct >= 400
    ? document.querySelector("header").classList.add("sticky")
    : document.querySelector("header").classList.remove("sticky");
  scrollGnbOn(winSct);
});

const scrollGnbOn = (sct) => {
  if (sct >= sections[0].offsetTop - 300) {
  gnbOff();
  document.querySelector(".gnb li:nth-child(1)").classList.add("on");
}
if (sct >= sections[1].offsetTop - 300) {
  gnbOff();
  document.querySelector(".gnb li:nth-child(2)").classList.add("on");
}
if (sct >= sections[2].offsetTop - 300) {
  gnbOff();
  document.querySelector(".gnb li:nth-child(3)").classList.add("on");
}
if (sct >= sections[3].offsetTop - 300) {
  gnbOff();
  document.querySelector(".gnb li:nth-child(4)").classList.add("on");
}
if (sct >= sections[4].offsetTop - 300) {
  gnbOff();
  document.querySelector(".gnb li:nth-child(5)").classList.add("on");
}

};







// skills

$(function () {
    const progressBox = $(".progress-bar");
    const progressOst=$(".animation").offset().top -1100;
    let isAni=false;
  
    $(window).scroll(function(){
      if($(window).scrollTop()>=progressOst && !isAni){
          progressAni();
  
      }
    })
  
    function progressAni(){
      progressBox.each(function () {
          let $this = $(this),
            progressBar = $this.find(".bar"),
            progressText = $this.find(".rate"),
            progressRate = progressText.attr("data-rate");
          //console.log(progressRate);
          progressBar.animate({ width: progressRate + "%" }, 2500);
      
          //변수 text 선언후 익명함수 할당
          let text = function () {
            $({rate:0}).animate(
              { rate: progressRate },
              {
                duration: 2000,
                progress: function () {
                  let now=this.rate;
                  progressText.text(Math.floor(now)+'%');
                },
                complete:function(){isAni=true}
              });
          };
          text();
        });
      
    }
  });
  

//   bg_ani
$(function () {
    
    $(window).scroll(function () {
      var sct = $(window).scrollTop();
      if (sct >= 550) {
        $(".right1").addClass("on");
      }
      if (sct >= 600) {
        $(".profile_left").addClass("on");
      }
      if (sct >= 2750) {
        $("#sec_project1").addClass("on");
      }
      if (sct >= 5700) {
        $("#sec_project4").addClass("on");
      }
    });
  });
  



  $(window).scroll( function(){
    let scrollTop=$(window).scrollTop();

    //변수scrollTop의 값을 .box1에 출력하세요
    //.box1 을 저장
    //출력
    $(".box").html("<p class='counter'>"+scrollTop)
})