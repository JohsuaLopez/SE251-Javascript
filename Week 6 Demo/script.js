if (localStorage.getItem('post')) {

    let posts = JSON.parse(localStorage.getItem('post'));

    posts.forEach(function(value) {
        document.getElementById('output').innerHTML += value;
    });
}









function addPost() {
    let arr = Array.from(document.querySelectorAll('.post')).map(function(value) {
        return value.outerHTML;
    });

    localStorage.setItem('post' , JSON.stringify(arr));
}








document.getElementById('add').addEventListener('click' , function(e) {

    let post = document.createElement('div');

    post.setAttribute('class', 'post');

    let p = document.createElement('p');

    p.textContent = document.querySelector('textarea').value;

    let time = document.createElement('time');
    time.textContent = new Date().toLocaleTimeString();

    post.append(time, p);

    document.getElementById('output').append(post);

    addPost();
});