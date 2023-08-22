// Retrieve dashboard items from local storage
const dashBoardList = JSON.parse(localStorage.getItem('dashboard')) || [];
const cartItemsList = document.getElementById('dasbBoardItem');


// remove from local storage
const removeCourse = (index) => {
    dashBoardList.splice(index, 1);
    localStorage.setItem('dashboard', JSON.stringify(dashBoardList));
    location.reload();
}



// Display dashboard items
dashBoardList.forEach((key, index) => {
    const dashBoardCourse = document.createElement('div');

    dashBoardCourse.innerHTML = `
    <div class="col-sm-6 col-md-6 col-lg-11 mt-5">
        <div class="card cart-box-shadow">
            <div class="card-body second-background-gradiant d-flex f-row row">

                <div class="col-lg-4">
                    <img class='img-fluid' src='${key.image}' alt="Course Image">
                </div>

                <div class="col-lg-7"> <!-- Added "class" attribute -->
                    <p class="fw-bold" style="font-size: 2rem;">${key.title}</p>
                    <p>${key.description}</p>
                    <div class="d-flex justify-content-between">
                        <a href="./video-player.html" target="_blank">
                            <button type="button" class="btn btn-primary">Start learning</button>
                        </a>
                        <button onClick="removeCourse(${index})" type="button" class="btn btn-danger">Remove Course</button>
                    </div>
                </div>

            </div>
        </div>
    </div>
`;


    cartItemsList.appendChild(dashBoardCourse);
});