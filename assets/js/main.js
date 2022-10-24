

$("#blog").ready(function() {
    $('.blog-container').load("/2022/10/21/my-first-jekyll-blog.html #default");
    $('.blog-anchors').click(function(event) {
        event.preventDefault();
        $('.blog-container').empty();
        var elm = event.target;
        var resource_href = $(elm).attr("href");
        console.log(resource_href);
        $('.blog-container').load(resource_href);
    });
});


