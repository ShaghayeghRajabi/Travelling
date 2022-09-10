//SIDE NAV
$(".openbtn").click(function(){
    
    $('.sidenavContainer').css("display", "block");

});

$(".sidenavClosebtn").click(function(){
    
    $('.sidenavContainer').css("display", "none");

});


// GALLRY
$(".galleryImg").click(function(){
    
    var imgSrc = $(this).attr("src");
    
    $("div").hide();
    $(".showContainer").css("display", "flex");
    $(".show").attr("src", imgSrc);

});

$(".closebtn").click(function(){
    $("div").show();
    $('.sidenavContainer').css("display", "none");
    $(".showContainer").hide();
});


