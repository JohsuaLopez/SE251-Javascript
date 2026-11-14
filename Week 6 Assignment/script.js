/*
    Display posts stored in local storage

    Check to see if `posts` exists in local storage.
    If it does:
        Parse the JSON string
        Loop through the returned array and add each string to the page as innerHTML.
*/
if (localStorage.getItem(`posts`)) {

    // Deserializing JSON text string into a JavaScript array.
    let posts = JSON.parse(localStorage.getItem(`posts`));  
    
    posts.forEach(function(value) {
        document.getElementById(`output`).innerHTML += value;
    });  
}


/*
    Save posts to localStorage

    Create an array of the post's outerHTML strings
    Store the array in local storage as a JSON String
*/
function savePosts() {
    // Array.from() creates an array from the provided iterable/arraylike object argument. They can convert any iterable object (e.g. string, set, or map), or any array-like objects (i.e. any object that have a .length property and indexed elements, but none of the built-in array methods). 
    let arr = Array.from(document.querySelectorAll(`.post`)).map(function(value) {
        return value.outerHTML;  // outerHTML includes the element's parent tags.
    });

    // Note: JSON data format is useful for storing complex structures like arrays or objects within localStorage. Otherwise, for simple data like a user's username or their theme preference, a plain string can be stored as well. JSON is a workaround to the useless string output of [object Object] when a raw JavaScript object is stored directly into localStorage.
    localStorage.setItem(`posts`, JSON.stringify(arr));    
}


/*
    Add button

    When the `Add` button is clicked:
        Create a div for a post
        Gives it a `post` class
        Create a <p> tag
        Add the textarea's value to the <p> tag's textContent
        Create a <time> element
        Add the system time to the time element's textContent
        Add the <time> and <p> to the <div>
        Add the post <div> to the #output <section>
        Save the post to localStorage
*/
document.getElementById(`add`).addEventListener(`click`, function(e) {

    let post = document.createElement(`div`);
    post.setAttribute(`class`, `post`);

    let checkbox = document.createElement(`input`);
    checkbox.setAttribute(`type`, `checkbox`);
    checkbox.classList.add('hidden');

    let p = document.createElement(`p`);
    p.textContent = document.querySelector(`textarea`).value;

    let time = document.createElement(`time`);
    time.textContent = new Date().toLocaleTimeString();

    post.append(checkbox,time, p);  // Appending multiple elements to the DOM at once, in sequential order.

    document.getElementById(`output`).append(post);

    savePosts();

});

const bulkDelete = document.querySelector('#delete')

bulkDelete.addEventListener("click", function(){
    
    let inputs = document.querySelectorAll(".post input");
    
    inputs.forEach(function(i){
        i.classList.toggle("hidden");
    });
});














