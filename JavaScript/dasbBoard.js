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
        <div class="col-sm-6 col-md-6 col-lg-4 mt-5">
            <div class="card">
                <div class="card-body">
                    <p>${key.title}</p>
                    <img class='img-fluid' src='${key.image}'>
                    <p>${key.description}</p>
                    <div>
                        <a href="./video-player.html" target="_blank">
                            <button type="button" class="btn btn-primary">Start learning</button>
                        </a>
                        <button onClick="removeCourse(${index})" type="button" class="btn btn-primary">Remove Course</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    cartItemsList.appendChild(dashBoardCourse);
});
