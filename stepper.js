function nextStep(step) {
    if (step === 2) {
        $(".first").html("<i class='fas fa-check' style='color: white;'></i>");
        $(".line1 > hr").css("border-top", "3px solid #5d4f9f");
        $(".form1").css("display", "none");
        $(".form2").css("display", "block");
        $(".second").addClass("activeStep");
    } else if (step === 3) {
        $(".second").html("<i class='fas fa-check' style='color: white;'></i>");
        $(".line2 > hr").css("border-top", "3px solid #5d4f9f");
        $(".form2").css("display", "none");
        $(".form3").css("display", "block");
        $(".third").addClass("activeStep");
    } else if (step === 4) {
        $(".third").html("<i class='fas fa-check' style='color: white;'></i>");
        $(".form3").css("display", "none");
        $(".form4").css("display", "block");
    }
}

function prevStep(step) {
    if (step === 1) {
        $(".first").html("1");
        $(".line1 > hr").css("border-top", "3px solid rgba(0, 0, 0, 0.1)");
        $(".form2").css("display", "none");
        $(".form1").css("display", "block");
        $(".second").removeClass("activeStep");
    } else if (step === 2) {
        $(".second").html("2");
        $(".line2 > hr").css("border-top", "3px solid rgba(0, 0, 0, 0.1)");
        $(".form3").css("display", "none");
        $(".form2").css("display", "block");
        $(".third").removeClass("activeStep");
    } else if (step === 3) {
        $(".third").html("3");
        $(".form4").css("display", "none");
        $(".form3").css("display", "block");
    }
}