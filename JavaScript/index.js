const getvalue1 = document.querySelector(".value1");
const getvalue2 = document.querySelector(".value2");
const getvalue3 = document.querySelector(".value3");
const getvalue4 = document.querySelector(".value4");

const counterNum = (number, position) => {
  let i = 0;
  const interval = setInterval(() => {
    position.innerHTML = i + "k+";
    i++;
    if (i > number) {
      clearInterval(interval);
    }
  }, 10);
};

counterNum(758, getvalue1);
counterNum(564, getvalue2);
counterNum(968, getvalue3);
counterNum(759, getvalue4);

const allCourses = [
  {
    id: "WD101",
    title: "Web Development Fundamentals",
    description:
      "This course covers the basic concepts and tools for building static and dynamic websites. Students will learn HTML, CSS, JavaScript, and jQuery to create engaging and interactive web pages.",
    image:
      "https://codehelp-apis.vercel.app/get-top-courses/Development/Web%20Development%20Fundamentals.png",
  },
  {
    id: "DS201",
    title: "Data Science Essentials",
    description:
      "This course provides an introduction to the fundamental concepts and techniques used in data science. Students will learn how to collect, clean, analyze, and visualize data using popular tools and programming languages like Python and R.",
    image:
      "https://codehelp-apis.vercel.app/get-top-courses/Development/Data%20Science%20Essentials.png",
  },
  {
    id: "ST301",
    title: "Software Testing Fundamentals",
    description:
      "This course covers the basics of software testing, including test ,planning, test case design, test execution, and defect management. Students will learn how to use popular testing frameworks and tools to ensure the quality and reliability of software applications.",
    image:
      "https://codehelp-apis.vercel.app/get-top-courses/Development/Software%20Testing%20Fundamentals.png",
  },
  {
    id: "MD401",
    title: "Mobile App Development",
    description:
      "This course teaches students how to build native mobile apps using the React Native framework. Students will learn how to create cross-platform apps that work on both iOS and Android devices, using a single codebase.",
    image:
      "https://codehelp-apis.vercel.app/get-top-courses/Development/Mobile%20App%20Development%20With%20React%20Native.png",
  },
  {
    id: "DO501",
    title: "DevOps for Agile Teams",
    description:
      "This course provides an overview of DevOps principles and practices, with a focus on how they can be applied in agile software development teams. Students will learn how to use popular tools and techniques for continuous integration, continuous delivery, and automated testing.",
    image:
      "https://codehelp-apis.vercel.app/get-top-courses/Development/Devops%20for%20Agile%20Teams.png",
  },
  {
    id: "MK101",
    title: "Introduction to Marketing",
    description:
      "This course provides an overview of marketing principles and practices, including market research, segmentation, targeting, and positioning. Students will learn how to create effective marketing plans and campaigns, using both traditional and digital marketing techniques.",
    image:
      "https://codehelp-apis.vercel.app/get-top-courses/Business/Introduction%20To%20Marketing.png",
  },
];

const coursesCard = document.querySelector(".our-course-container");

const initApp = () => {
  allCourses.forEach((key) => {
    coursesCard.innerHTML += `
        <div class="col-lg-4 col-md-6 mb-4 pt-5">
          <a href="./Pages/courses.html">
                <div class="card cart-box-shadow">
                    <div class="card-body">
                    <img src="${key.image}" class="card-img-top" alt="Image 2" />
                    <h4 class="text-primary text-center pt-3 fw-bold">${key.title}</h4>
                    </div>
                </div>
                </a>
            </div> 
        `;
  });
};
initApp();

let thim = true;
const darkLightTheme = document.querySelector(".dark-light-mode-box");
const darkLightThemeSecond = document.querySelectorAll(".dark-light-mode-box-2");
const darkModebtn = document.querySelector(".dark-light-btn");

darkModebtn.addEventListener("click", () => {
  if (thim) {
    darkLightThemeSecond.forEach(key => {
      key.classList.add("dark-mode-2");
    });
    thim = false;
    darkLightTheme.classList.add("dark-mode");
    darkModebtn.src = "./assest/new-index-image/light-moon.png";
  } else {
    darkLightThemeSecond.forEach(key => {
      key.classList.remove("dark-mode-2");
    });
    thim = true;
    darkLightTheme.classList.remove("dark-mode");
    darkModebtn.src = "./assest/new-index-image/dark-moon.png";
  }
});


