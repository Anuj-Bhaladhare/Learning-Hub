const allCoursesData = [
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
    {
        id	:"LD201",
        title:	"Leadership Development",
        description:	"This course covers the fundamental concepts and skills required for effective leadership, including communication, motivation, delegation, and team building. Students will learn how to lead teams and organizations, and how to handle common leadership challenges.",
        image:"https://codehelp-apis.vercel.app/get-top-courses/Business/Leadership%20Development.png",
        
    },
    {
        id:	"FN301",
        title:	"Finance for Non-Financial Managers",
        description:	"This course provides an introduction to finance concepts and tools for non-financial managers. Students will learn how to read and interpret financial statements, analyze financial data, and make informed financial decisions.",
        image:"https://codehelp-apis.vercel.app/get-top-courses/Business/Finance%20for%20Non-Financial%20Managers.png",
                    
    },
    {
        id:	"OM401",
        title:	"Operations Management Fundamentals",
        description:	"This course covers the basics of operations management, including process design, capacity planning, inventory management, and quality control. Students will learn how to optimize operations to improve efficiency, productivity, and customer satisfaction.",
        image:"https://codehelp-apis.vercel.app/get-top-courses/Business/Operations%20Management%20Fundamentals.png",
    },
    {
        id	:"PM501",
        title:	"Project Management Essentials",
        description	:"This course provides an overview of project management principles and techniques, including project planning, scheduling, budgeting, risk management, and stakeholder communication. Students will learn how to manage projects effectively, using both traditional and agile project management approaches.",
        image:"https://codehelp-apis.vercel.app/get-top-courses/Business/Project%20Management%20Essentials.png"
    },
    {
        id:	"GD101",
        title:	"Graphic Design Fundamentals",
        description	:"This course covers the basic principles of graphic design, including typography, color theory, layout design, and image manipulation. Students will learn how to use industry-standard design software to create effective visual designs for print and digital media.",
        image:"https://codehelp-apis.vercel.app/get-top-courses/Design/Graphic%20Design%20Fundamentals.png",
    },
    {
        id:	"UX201",
        title:	"User Experience Design",
        description	:"This course covers the fundamentals of user experience (UX) design, including user research, interaction design, information architecture, and usability testing. Students will learn how to design digital products and services that meet user needs and business goals.",
        image:"https://codehelp-apis.vercel.app/get-top-courses/Design/User%20Experience%20Design.png",
    },
    {
        id:	"ID301",
        title:	"Industrial Design Essentials",
        description:	"This course covers the fundamental concepts and techniques used in industrial design, including sketching, prototyping, modeling, and design for manufacturing. Students will learn how to create innovative and functional products that meet user needs and market demands.",
        image:"https://codehelp-apis.vercel.app/get-top-courses/Design/Industrial%20Design%20Essentials.png",
    },
    {
        id:	"FD401",
        title:	"Fashion Design Principles",
        description:	"This course covers the principles and practices of fashion design, including fashion illustration, textile design, pattern making, and garment construction. Students will learn how to design and produce original and stylish clothing for different markets and occasions.",
        image:"https://codehelp-apis.vercel.app/get-top-courses/Design/Fashion%20Design%20Principles.png"
    },
    {
        id:	"FD401",
        title:	"Fashion Design Principles",
        description:	"This course covers the principles and practices of fashion design, including fashion illustration, textile design, pattern making, and garment construction. Students will learn how to design and produce original and stylish clothing for different markets and occasions.",
        image:"https://codehelp-apis.vercel.app/get-top-courses/Design/Fashion%20Design%20Principles.png"
    },
    {
        id:	"LC101",
        title:	"Cooking Basics",
        description:	"This course provides an introduction to cooking techniques, ingredients, and flavors. Students will learn how to plan and prepare meals, using simple recipes and kitchen tools. The course covers a range of cuisines and dietary preferences.",
        image:"https://codehelp-apis.vercel.app/get-top-courses/Lifestyle/Cooking%20Basics.png"
    },
    {
        id:	"LF201",
        title:	"Fitness for Life",
        description:	"This course covers the fundamentals of fitness, including exercise principles, workout planning, and nutrition. Students will learn how to build strength, endurance, and flexibility, and how to create a healthy and sustainable lifestyle.",
        image:"https://codehelp-apis.vercel.app/get-top-courses/Lifestyle/Fitness%20For%20Life.png"
    },
    {
        id:	"LT301",
        title:	"Travel Photography",
        description:"This course covers the fundamentals of travel photography, including composition, lighting, and storytelling. Students will learn how to use a range of camera equipment and editing software to capture and share their travel experiences.",
        image	:"https://codehelp-apis.vercel.app/get-top-courses/Lifestyle/Travel%20Photography.png",
    },
];

const courseDisplay = document.querySelector(".example");

allCoursesData.forEach((key, index) => {
    courseDisplay.innerHTML += `
        <div class="col-sm-6 col-md-6 col-lg-4 mt-5">
            <div class="card">
                <div class="card-body">
                    <p>${key.title}</p>
                    <img class='img-fluid' src='${key.image}'>
                    <p>${key.description}</p>
                    <button onClick="addToDashboardBtn(${index})" type="button" class="btn btn-primary">Add To Your Dashboard</button>
                </div>
            </div>
        </div>
    `;
});

// Function to add item to dashboard
function addToDashboardBtn(index) {
    let courses = JSON.parse(localStorage.getItem('dashboard')) || [];
    courses.push(allCoursesData[index]);
    localStorage.setItem('dashboard', JSON.stringify(courses)); 
    alert('Course added to dashboard!'); 
}













// ================================================================================================
//         // Simulate product data
//         const product = [
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


