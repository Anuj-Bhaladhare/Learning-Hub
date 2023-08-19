const getvalue1 = document.querySelector(".value1");
const getvalue2 = document.querySelector(".value2");
const getvalue3 = document.querySelector(".value3");
const getvalue4 = document.querySelector(".value4");

const counterNum = (number, position) => {
    let i = 0;
    const interval = setInterval( () => {
        position.innerHTML = i + "k+";
        i++;
        if(i > number){
            clearInterval(interval);
        }
    }, 10);
}

counterNum(758, getvalue1);
counterNum(564, getvalue2);
counterNum(968, getvalue3);
counterNum(759, getvalue4);




const allCourses = [
    {
        id: "WD101",
        title: "Web Development Fundamentals",
        description: "This course covers the basic concepts and tools for building static and dynamic websites. Students will learn HTML, CSS, JavaScript, and jQuery to create engaging and interactive web pages.",
        image:"https://codehelp-apis.vercel.app/get-top-courses/Development/Web%20Development%20Fundamentals.png",
    },
    {
        id	:"DS201",
        title:	"Data Science Essentials",
        description	:"This course provides an introduction to the fundamental concepts and techniques used in data science. Students will learn how to collect, clean, analyze, and visualize data using popular tools and programming languages like Python and R.",
        image:	"https://codehelp-apis.vercel.app/get-top-courses/Development/Data%20Science%20Essentials.png",
    },
    {
        id	:"ST301",
        title	:"Software Testing Fundamentals",
        description	:"This course covers the basics of software testing, including test ,planning, test case design, test execution, and defect management. Students will learn how to use popular testing frameworks and tools to ensure the quality and reliability of software applications.",
        image:"https://codehelp-apis.vercel.app/get-top-courses/Development/Software%20Testing%20Fundamentals.png",
    },
    {
        id	:"MD401",
        title	:"Mobile App Development with React Native",
        description	:"This course teaches students how to build native mobile apps using the React Native framework. Students will learn how to create cross-platform apps that work on both iOS and Android devices, using a single codebase.",
        image	:"https://codehelp-apis.vercel.app/get-top-courses/Development/Mobile%20App%20Development%20With%20React%20Native.png",
    },
    {
        id	:"DO501",
        title:	"DevOps for Agile Teams",
        description	:"This course provides an overview of DevOps principles and practices, with a focus on how they can be applied in agile software development teams. Students will learn how to use popular tools and techniques for continuous integration, continuous delivery, and automated testing.",
        image:"https://codehelp-apis.vercel.app/get-top-courses/Development/Devops%20for%20Agile%20Teams.png",
    },
    {
        id:	"MK101",
        title	:"Introduction to Marketing",
        description	:"This course provides an overview of marketing principles and practices, including market research, segmentation, targeting, and positioning. Students will learn how to create effective marketing plans and campaigns, using both traditional and digital marketing techniques.",
        image:"https://codehelp-apis.vercel.app/get-top-courses/Business/Introduction%20To%20Marketing.png",
    },
   
];

const coursesCard = document.querySelector(".example");

const initApp = () => {
    allCourses.forEach((key) => {
        coursesCard.innerHTML += `
            <div class="col-sm-6 col-md-6 col-lg-4 mt-5">
                <div class="card">
                    <div class="card-body">
                        <img class='img-fluid' src='${key.image}'>
                        <p class="fs-1 fw-bold">${key.title}</p>
                        <div class="d-flex justify-content-around">
                            <a href="./Pages/courses.html">
                               <button type="button" class="btn btn-primary">View All Courses</button>
                            </a>
                            <p>Free</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        `;
    });
}
initApp();



// ================================================================================================
//         // Simulate product data
//         const product = [               <p>${key.description}</p>
//             { 
//                 id: 1,
//                 name: 'somanwasa',
//                 price: 19.99
//             },
//             { 
//                 id: 2,
//                 name: 'kandakali',
//                 price: 58.99
//             },
//             { 
//                 id: 3,
//                 name: 'makhanas',
//                 price: 95.99
//             },
//             { 
//                 id: 4,
//                 name: 'saddiaf',
//                 price: 75.99
//             },
//         ]
        
//         const productDisplay = document.querySelector('.example');

//         product.forEach((item, index) => {
//             productDisplay.innerHTML += `
//                 <p>${item.id}</p>
//                 <p>${item.name}</p>
//                 <p>${item.price}</p>
//                 <button onClick="addToCartBtn(${index})">Add to cart</button>
//             `;
//         })

//         // Function to add item to cart
//         function addToCartBtn(index) {
//             let cart = JSON.parse(localStorage.getItem('anuj')) || [];
//             cart.push(product[index]);
//             localStorage.setItem('anuj', JSON.stringify(cart));
//             alert('Item added to cart!');
//         }


