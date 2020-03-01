$("login").click(function() {
    $(".switch span").removeClass("active")
    $(this).addClass("active");

    $(this).parents(".content").removeClass("signUp");
    $(this).parents(".content").removeClass("login");

    $("form button").text("登录");
});

$("signUp").click(function() {
    $(".switch span").removeClass("active")
    $(this).addClass("active");

    $(this).parents(".content").removeClass("login");
    $(this).parents(".content").removeClass("signUp");

    $("form button").text("注册");
});

$(".input input").on("focus", function() {
    $(this).parent().addClass("focus");
});

$(".input input").on("blur", function() {
    if($(this).val() === ""){
        $(this).parent().removeClass("focus");
    }
});