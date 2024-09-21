shows_blogs=[{url:"/blog/shows/exampleblog.html",title:"title",desc:"an example blog."}];
games_blogs=[];
diary_entries=[];
photo_logs=[];

function loadBlogList(list){
    var bloglist=document.getElementById("bloglist");
    bloglist.innerHTML="";
    for(const i in shows_blogs){
        var k=list[i];
        var x=document.createElement("li");
        x.innerHTML=`<a href="${k.url}"><h2>${k.title}</h2></a>
                     <p>${k.desc}</p>`;
        bloglist.appendChild(x);
    }
}