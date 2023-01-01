// let addFun = () => {
//     let textaras = document.getElementById("write_comment").value;
//     let p = document.getElementById("text_comment");
//     let post = document.getElementById("post_comment");

//     p.innerHTML = textaras;

// }
// post_comment.addEventListener("click",addFun);



// post_comment.addEventListener("click", function(){
//     let p = document.getElementById("text_comment");
//     let textFun = document.getElementById("write_comment").value;
//     let posts = document.getElementById("post_comment");
//     p.innerHTML = textFun;
// });


// multiple p (create elements) 
let submit = document.getElementById("post_comment");
submit.addEventListener("click", function(){
    let userComment = document.getElementById("write_comment").value;
    let newP = document.createElement("p");
    newP.innerHTML = userComment;
    let mainContainer = document.getElementById("box_content");
    mainContainer.appendChild(newP);
    document.getElementById("write_comment").value = " ";

    let userRemove = document.getElementById("delete_comment");
    userRemove.addEventListener("click",function(){
    mainContainer.remove(newP);
});


});


