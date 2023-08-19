// Retrieve dashboard items from local storage
const dashBoardList = JSON.parse(localStorage.getItem('dashboard')) || [];
const cartItemsList = document.getElementById('dasbBoardItem');

// Display dashboard items
dashBoardList.forEach(key => {
    const dashBoardCourse = document.createElement('div');

    dashBoardCourse.innerHTML = `
        <div class="col-sm-6 col-md-6 col-lg-4 mt-5">
            <div class="card">
                <div class="card-body">
                    <p>${key.title}</p>
                    <img class='img-fluid' src='${key.image}'>
                    <p>${key.description}</p>
                    <a href="./video-player.html" target="_blank">
                       <button type="button" class="btn btn-primary">Start learning</button>
                    </a>
                </div>
            </div>
        </div>
    `;

    cartItemsList.appendChild(dashBoardCourse);
});
