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
// $(function () {
    
//     $(window).scroll(function () {
//       var sct = $(window).scrollTop();
//       if (sct >= 120) {
//         $(".article1").addClass("on");
//       }
//       if (sct >= 450) {
//         $(".left1").addClass("on");
//       }
//       if (sct >= 550) {
//         $(".right1").addClass("on");
//       }
//     });
//   });
  



