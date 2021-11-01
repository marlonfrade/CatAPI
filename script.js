let cat_pic_button = document.querySelector('.cat_pic_button');
let range_input = document.querySelector('.range_input');
let cat_pic = document.querySelector('.cat_pic');

let width = cat_pic.width;
let height = cat_pic.height;

cat_pic_button.addEventListener('click', fetchRandomPic);

function fetchRandomPic() {
    let cat_pic_div = document.querySelector('.cat_pic_div');
    let cat_div_id = document.querySelector('.cat_div_id');
    cat_pic_div.innerHTML = '';
    cat_div_id.innerHTML = '';

    fetch('https://api.thecatapi.com/v1/images/search')
        .then(Response => Response.json())
        .then((data) => {
            let cat_pic_url = data[0].url;
            let cat_pic_id = data[0].id;

            console.log(data[0]);

            let cat_id = document.createElement('p');

            cat_pic.setAttribute('src', `${cat_pic_url}`);

            cat_id.append(`${cat_pic_id}`);

            cat_pic_div.appendChild(cat_pic);
            cat_div_id.appendChild(cat_id);

        })
        .catch(err => console.log(err))

}

range_input.onchange = function () {
    cat_pic.width = width * (range_input.value / 1000);
    cat_pic.height = height * (range_input.value / 1000);
}