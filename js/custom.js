// top
$(function () {
  const btt = document.querySelector("#to_top");
  let scrollAmount;
  window.addEventListener("scroll", function () {
    scrollAmount = this.scrollY;
    if (scrollAmount > scrollAmount / 5) {
      btt.classList.add("visible");
    } else {
      btt.classList.remove("visible");
    }
  });
});

//gnb
$(function () {
  let win = window,
    winSct,
    sections = document.querySelectorAll(".section"),
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
    if (sct >= sections[8].offsetTop - 300) {
      gnbOff();
      document.querySelector(".gnb li:nth-child(5)").classList.add("on");
    }
  };
});

// skills

$(function () {
  const progressBox = $(".progress-bar");
  const progressOst = $(".animation").offset().top - 1100;
  let isAni = false;

  $(window).scroll(function () {
    if ($(window).scrollTop() >= progressOst && !isAni) {
      progressAni();
    }
  });

  function progressAni() {
    progressBox.each(function () {
      let $this = $(this),
        progressBar = $this.find(".bar"),
        progressText = $this.find(".rate"),
        progressRate = progressText.attr("data-rate");
      //console.log(progressRate);
      progressBar.animate({ width: progressRate + "%" }, 2500);

      //?????? text ????????? ???????????? ??????
      let text = function () {
        $({ rate: 0 }).animate(
          { rate: progressRate },
          {
            duration: 2000,
            progress: function () {
              let now = this.rate;
              progressText.text(Math.floor(now) + "%");
            },
            complete: function () {
              isAni = true;
            },
          }
        );
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
    if (sct >= 550) {
      $(".profile_left").addClass("on");
    }
    if (sct >= 550) {
      $(".profile_right").addClass("on");
    }
    if (sct >= 2600) {
      $("#sec_project1").addClass("on");
    }
    if (sct >= 3550) {
      $("#sec_project2").addClass("on");
    }
    if (sct >= 4650) {
      $("#sec_project3").addClass("on");
    }
    if (sct >= 2600) {
      $("#sec_project1").addClass("on");
    }
    if (sct >= 5530) {
      $("#sec_project4").addClass("on");
    }
    if (sct >= 6700) {
      $("#sec_project5").addClass("on");
    }
  });
});

$(window).scroll(function () {
  let scrollTop = $(window).scrollTop();

  //??????scrollTop??? ?????? .box1??? ???????????????
  //.box1 ??? ??????
  //??????
  $(".box").html("<p class='counter'>" + scrollTop);
});

//mockup_scroll
$(function () {
  const hiddens = document.querySelectorAll(".hidden");
  const thumbs = document.querySelectorAll(".hidden>img");
  console.log(`hiddens:${hiddens}// thumbs:${thumbs}`);
  hiddens.forEach(function (hidden) {
    hidden.addEventListener("mouseenter", function (e) {
      e.preventDefault();
      console.log(e.target.offsetHeight);
      const tg = e.target;
      const tgH = tg.offsetHeight;
      const tgThumb = tg.firstChild;
      const tgThumbH = tgThumb.offsetHeight;
      tgThumb.style.top = tgH - tgThumbH + "px";
    });
    hidden.addEventListener("mouseleave", function (x) {
      x.preventDefault();
      const tg = x.target;
      const tgH = tg.offsetHeight;
      const tgThumb = tg.firstChild;
      const tgThumbH = tgThumb.offsetHeight;
      tgThumb.style.top = "0" + "px";
    });  });
});




