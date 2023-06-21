window.onload = () => {
  var frameNumber = 0, // start video at frame 0
    playbackConst = 500,
    setHeight = document.getElementById("set-height"),
    vid = document.getElementById("vid");

  function scrollPlay() {
    var frameNumber = window.pageYOffset / playbackConst;
    vid.currentTime = frameNumber;
    window.requestAnimationFrame(scrollPlay);
  }
  window.requestAnimationFrame(scrollPlay);
  vid.addEventListener("timeupdate", (e) => {
    let t = e.target.currentTime;
    console.log(t)

    if (t < 0.2) {
      document.querySelector(".step-1").classList.add("active");
    } else {
      document.querySelector(".step-1").classList.remove("active");
    }

    if (t > 2 && t < 3.2) {
      document.querySelector(".step-2").classList.add("active");
    } else {
      document.querySelector(".step-2").classList.remove("active");
    }

    // step-3
    if (t > 4 && t < 4.8) {
      document.querySelector(".step-3").classList.add("active");
    } else {
      document.querySelector(".step-3").classList.remove("active");
    }

    // step-4
    if (t > 4.8) {
      document.querySelector(".step-4").classList.add("active");
    } else {
      document.querySelector(".step-4").classList.remove("active");
    }
  });
};
