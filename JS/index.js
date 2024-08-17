
let { top: aboutSection } = $("#about").offset();

$(window).scroll(function () {
    let windowOffset = $(window).scrollTop();

    if (windowOffset > aboutSection - 100) {
        $("#navbar").css("background-color", "black");
        $("#navbar").css("padding", "0.5rem");
        $(".navbar").css("border-bottom", "none");
        $("#backToTop").fadeIn(1000);
    } else {
        $("#navbar").css("background-color", "transparent")
        $("#navbar").css("padding", "1.5rem");
        $(".navbar").css("border-bottom", "1px solid  rgba(255, 255, 255, 0.2)")
        $("#backToTop").fadeOut(1000);
    }

})


$("#backToTop").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 0.5);
})

AOS.init();

function counter() {
    $(".coffeBranches").countMe(0.9, 0.9);
    $(".awards").countMe(0.9, 0.9);
    $(".HappyCustomer").countMe(0.9, 0.9);
    $(".Staff").countMe(0.9, 0.9);
}

counter()
