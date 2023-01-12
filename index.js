const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 450
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]



const mainEl = document.getElementById("main")
 let feed = ""
 for (let i = 0; i < posts.length; i++) {
     feed += `
         <article class="post">
                 <div class="header">
                     <img class="avatar" src="${posts[i].avatar}">
                     <div>
                        <div>
                             <span class="name">${posts[i].name}</span>
                         </div>
                         <span class="location">${posts[i].location}</span>
                        </div>
                 </div>
                 <div>
                     <img class="img" src="${posts[i].post}">
                 </div>
                 <div class="control-bar container">
                     <img src="images/icon-heart.png" class="icons">
                     <img src="images/icon-comment.png" class="icons">
                    <img src="images/icon-dm.png" class="icons">                    
                 </div>
                 <div class="container">
                     <span class="name1">${posts[i].likes} likes</span>                 </div>
                 <div class="container">
                     <p><span class="name1">${posts[i].username}</span> ${posts[i].comment}</p>
                 </div>
            </article>
     `
}

 mainEl.innerHTML = feed;


