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
                    <button type="button" class="btn btn-primary">Start learning</button>
                </div>
            </div>
        </div>
    `;

    cartItemsList.appendChild(dashBoardCourse);
});











    // const p1 = document.createElement('p');
    // const p2 = document.createElement('p');
    // const p3 = document.createElement('p');
    // const button = document.createElement('button');
    // const div = document.createElement('div')

    // p1.textContent = `${item.id}`;
    // p2.textContent = `${item.name}`;
    // p3.textContent = `${item.price}`;
    // button.textContent = `Thanks`;

    // div.appendChild(p1);
    // div.appendChild(p2);
    // div.appendChild(p3);
    // div.appendChild(button);