// $(document).ready(function () {
//     $("h1").css("color", "red")
// })

// $("h1").css("color", "green")
// console.log($("h1").css("color"))
// $("h1").addClass('big_title margin_50')


// $("button").text("don't  click me")
// $("button").html("<em>bruh</em>")

// $("img").attr("src")
// $("a").attr("href", "http://127.0.0.1:3000/18advancedjsDOM/Drum%20Kit%20Starting%20Files/index.html")

// $("h1").click(function () {
//     $("h1").css("color", "purple")
// })

$("button").click(function () {
    // $("h1").css("font-size", "100px")
    // $("h1").css("color", "blue")
    // $("h1").toggle()
    // $("h1").fadeToggle()
    //vs fadeIn
    // vs .show()
    // vs. hide()
    //slideUp() slideDown() 
    // $("h1").slideToggle()
    $("h1").animate({ opacity: 0.5 })
    // only for numerical value
})

$("input").keypress(function (event) {
    console.log(event.key)
})


$(document).keypress(function (event) {
    $("h1").text(event.key)
})

$("h1").on("mouseover", function () {
    $("h1").css("color", "red")
})

$("h1").before("<button>new</button>")

// $("button").remove()