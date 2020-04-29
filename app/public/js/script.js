
$('#submit').on("click", function() {
    const newFriend = {};
    newFriend.name = $('#name').val();
    newFriend.photo = $('#photo').val();
    newFriend.scores = [

        $('#q1').val(),
        $('#q2').val(),
        $('#q3').val(),
        $('#q4').val(),
        $('#q5').val(),
        $('#q6').val(),
        $('#q7').val(),
        $('#q8').val(),
        $('#q9').val(),
        $('#q10').val(),

    ]

    console.log(newFriend);
    $.ajax({
        url: "/api/friends",
        method: "POST",
        data: newFriend
    }).then (function(data) {

        console.log(data);
    })
})