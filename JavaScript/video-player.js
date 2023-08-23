const container = document.querySelector(".container"),
  mainVideo = container.querySelector("video"),
  videoTimeline = container.querySelector(".video-timeline"),
  progressBar = container.querySelector(".progress-bar"),
  volumeBtn = container.querySelector(".volume i"),
  volumeSlider = container.querySelector(".left input");
(currentVidTime = container.querySelector(".current-time")),
  (videoDuration = container.querySelector(".video-duration")),
  (skipBackward = container.querySelector(".skip-backward i")),
  (skipForward = container.querySelector(".skip-forward i")),
  (playPauseBtn = container.querySelector(".play-pause i")),
  (speedBtn = container.querySelector(".playback-speed span")),
  (speedOptions = container.querySelector(".speed-options")),
  (pipBtn = container.querySelector(".pic-in-pic span")),
  (fullScreenBtn = container.querySelector(".fullscreen i"));
let timer;

const hideControls = () => {
  if (mainVideo.paused) return;
  timer = setTimeout(() => {
    container.classList.remove("show-controls");
  }, 3000);
};
hideControls();

container.addEventListener("mousemove", () => {
  container.classList.add("show-controls");
  clearTimeout(timer);
  hideControls();
});

const formatTime = (time) => {
  let seconds = Math.floor(time % 60),
    minutes = Math.floor(time / 60) % 60,
    hours = Math.floor(time / 3600);

  seconds = seconds < 10 ? `0${seconds}` : seconds;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  hours = hours < 10 ? `0${hours}` : hours;

  if (hours == 0) {
    return `${minutes}:${seconds}`;
  }
  return `${hours}:${minutes}:${seconds}`;
};

videoTimeline.addEventListener("mousemove", (e) => {
  let timelineWidth = videoTimeline.clientWidth;
  let offsetX = e.offsetX;
  let percent = Math.floor((offsetX / timelineWidth) * mainVideo.duration);
  const progressTime = videoTimeline.querySelector("span");
  offsetX =
    offsetX < 20
      ? 20
      : offsetX > timelineWidth - 20
      ? timelineWidth - 20
      : offsetX;
  progressTime.style.left = `${offsetX}px`;
  progressTime.innerText = formatTime(percent);
});

videoTimeline.addEventListener("click", (e) => {
  let timelineWidth = videoTimeline.clientWidth;
  mainVideo.currentTime = (e.offsetX / timelineWidth) * mainVideo.duration;
});

mainVideo.addEventListener("timeupdate", (e) => {
  let { currentTime, duration } = e.target;
  let percent = (currentTime / duration) * 100;
  progressBar.style.width = `${percent}%`;
  currentVidTime.innerText = formatTime(currentTime);
});

mainVideo.addEventListener("loadeddata", () => {
  videoDuration.innerText = formatTime(mainVideo.duration);
});

const draggableProgressBar = (e) => {
  let timelineWidth = videoTimeline.clientWidth;
  progressBar.style.width = `${e.offsetX}px`;
  mainVideo.currentTime = (e.offsetX / timelineWidth) * mainVideo.duration;
  currentVidTime.innerText = formatTime(mainVideo.currentTime);
};

volumeBtn.addEventListener("click", () => {
  if (!volumeBtn.classList.contains("fa-volume-high")) {
    mainVideo.volume = 0.5;
    volumeBtn.classList.replace("fa-volume-xmark", "fa-volume-high");
  } else {
    mainVideo.volume = 0.0;
    volumeBtn.classList.replace("fa-volume-high", "fa-volume-xmark");
  }
  volumeSlider.value = mainVideo.volume;
});

volumeSlider.addEventListener("input", (e) => {
  mainVideo.volume = e.target.value;
  if (e.target.value == 0) {
    return volumeBtn.classList.replace("fa-volume-high", "fa-volume-xmark");
  }
  volumeBtn.classList.replace("fa-volume-xmark", "fa-volume-high");
});

speedOptions.querySelectorAll("li").forEach((option) => {
  option.addEventListener("click", () => {
    mainVideo.playbackRate = option.dataset.speed;
    speedOptions.querySelector(".active").classList.remove("active");
    option.classList.add("active");
  });
});

document.addEventListener("click", (e) => {
  if (
    e.target.tagName !== "SPAN" ||
    e.target.className !== "material-symbols-rounded"
  ) {
    speedOptions.classList.remove("show");
  }
});

fullScreenBtn.addEventListener("click", () => {
  container.classList.toggle("fullscreen");
  if (document.fullscreenElement) {
    fullScreenBtn.classList.replace("fa-compress", "fa-expand");
    return document.exitFullscreen();
  }
  fullScreenBtn.classList.replace("fa-expand", "fa-compress");
  container.requestFullscreen();
});

speedBtn.addEventListener("click", () => speedOptions.classList.toggle("show"));
pipBtn.addEventListener("click", () => mainVideo.requestPictureInPicture());
skipBackward.addEventListener("click", () => (mainVideo.currentTime -= 5));
skipForward.addEventListener("click", () => (mainVideo.currentTime += 5));
mainVideo.addEventListener("play", () =>
  playPauseBtn.classList.replace("fa-play", "fa-pause")
);
mainVideo.addEventListener("pause", () =>
  playPauseBtn.classList.replace("fa-pause", "fa-play")
);
playPauseBtn.addEventListener("click", () =>
  mainVideo.paused ? mainVideo.play() : mainVideo.pause()
);
videoTimeline.addEventListener("mousedown", () =>
  videoTimeline.addEventListener("mousemove", draggableProgressBar)
);
document.addEventListener("mouseup", () =>
  videoTimeline.removeEventListener("mousemove", draggableProgressBar)
);

// ====================================================================================

const allVideo = [
    {
       name: "introduction of this cource lecture - 1",
       video: "https://res.cloudinary.com/dsxheywlc/video/upload/v1692342170/study-zone/15_r4fuyw.mp4",
    },
    {
       name: "How to create the Project lecture - 2",
       video: "https://res.cloudinary.com/dsxheywlc/video/upload/v1692342166/study-zone/11_earutr.mp4",
    },
    {
       name: "construction and working lecture - 3",
       video: "https://res.cloudinary.com/dsxheywlc/video/upload/v1692342164/study-zone/14_qbrtgy.mp4",
    },
    {
       name: "Web Development Fundamentals lecture - 4",
       video: "https://res.cloudinary.com/dsxheywlc/video/upload/v1692342163/study-zone/3_uvfx9y.mp4",
    },
    {
       name: "Software Testing Fundamentals lecture - 5",
       video: "https://res.cloudinary.com/dsxheywlc/video/upload/v1692342160/study-zone/4_dwumiv.mp4",
    },
    {
       name: "Mobile App Development with React Native lecture - 6",
       video: "https://res.cloudinary.com/dsxheywlc/video/upload/v1692342154/study-zone/5_vfoykd.mp4",
    },
    {
       name: "Finance for Non-Financial Managers lecture - 7",
       video: "https://res.cloudinary.com/dsxheywlc/video/upload/v1692342152/study-zone/8_unik8r.mp4",
    },
    {
       name: "Operations Management Fundamentals lecture - 8",
       video: "https://res.cloudinary.com/dsxheywlc/video/upload/v1692342151/study-zone/7_it6sm2.mp4",
    },
    {
       name: "Graphic Design Fundamentals lecture - 9",
       video: "https://res.cloudinary.com/dsxheywlc/video/upload/v1692342150/study-zone/6_yhobhy.mp4",
    },
    {
       name: "Industrial Design Essentials lecture - 10",
       video: "https://res.cloudinary.com/dsxheywlc/video/upload/v1692342146/study-zone/13_fiwsem.mp4",
    },
    {
       name: "Project Management Essentials1 lecture - 11",
       video: "https://res.cloudinary.com/dsxheywlc/video/upload/v1692342144/study-zone/17_cb4jbi.mp4",
    },
    {
       name: "User Experience Design lecture - 12",
       video: "https://res.cloudinary.com/dsxheywlc/video/upload/v1692342144/study-zone/12_wxv4il.mp4",
    },
    {
       name: "Mobile App Development with React Native lecture - 13",
       video: "https://res.cloudinary.com/dsxheywlc/video/upload/v1692342136/study-zone/2_ubt9kk.mp4",
    },
    {
       name: "Operations Management Fundamentals lecture - 14",
       video: "https://res.cloudinary.com/dsxheywlc/video/upload/v1692342131/study-zone/16_zhquwp.mp4",
    },
    {
       name: "Project Management Essentials lecture - 15",
       video: "https://res.cloudinary.com/dsxheywlc/video/upload/v1692342170/study-zone/15_r4fuyw.mp4",
    },
    {
       name: "Operations Management Fundamentals lecture - 16",
       video: "https://res.cloudinary.com/dsxheywlc/video/upload/v1692342166/study-zone/11_earutr.mp4",
    },
    {
       name: "Mobile App Development with React Native lecture - 17",
       video: "https://res.cloudinary.com/dsxheywlc/video/upload/v1692342164/study-zone/14_qbrtgy.mp4",
    },
];

const videoSource = document.querySelector(".example");
const getVideoPlayer = document.querySelector(".video-player");
const getPrevbtn = document.querySelector(".prev-btn");
const getNextbtn = document.querySelector(".next-btn");

let currentVideoIndex = 0;

allVideo.forEach( (key, index) => {
  videoSource.innerHTML += `
     <button class="courses-button" onClick="videoPlayerChange(${index})">
     <i class="fa fa-video-camera" aria-hidden="true"></i>
     ${key.name}
     </button> <br/>
  `;
})

const videoPlayerChange = (index) => {
  const selectedVideo = allVideo[index];
  getVideoPlayer.src = selectedVideo.video;
  currentVideoIndex = index;
}

getNextbtn.addEventListener("click", () => {
  if (currentVideoIndex - 1 < 0) {
      videoPlayerChange(allVideo.length - 1);
  } else {
      videoPlayerChange(currentVideoIndex - 1);
  }
})

getPrevbtn.addEventListener("click", () => {

  if (currentVideoIndex >= allVideo.length - 1) {
      videoPlayerChange(0);
  } else {
      videoPlayerChange(currentVideoIndex + 1);
  }
})
