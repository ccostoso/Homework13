$('#submit').on('click', e => {
    e.preventDefault();

    const newFriend = {
        name: $('#name').val().trim(),
        image: $('#image').val().trim(),
        scores: [
            $('#q1').val(),
            $('#q2').val(),
            $('#q3').val(),
            $('#q4').val(),
            $('#q5').val(),
            $('#q6').val(),
            $('#q7').val(),
            $('#q8').val(),
            $('#q9').val(),
            $('#q10').val()
        ]
    }

    findFriends(newFriend);

    setTimeout(() => {
        console.log('==================');
    }, 500)
})

function findFriends(newFriend) {
    let existingFriends = [];

    $.get('/api/friends', data => {
        console.log(data);
    }).then(data => {
        data.forEach(ele => {
            existingFriends.push(ele);
        });
        
        matchFriends(existingFriends, newFriend);
    })
}

function matchFriends(existingFriends, newFriend) {

    if (existingFriends.length > 0) {
        let compareArr = [];

        existingFriends.forEach(ele => {
            let diffCount = 0;

            ele.scores.forEach((ele, i) => {
                diffCount += Math.abs(ele - newFriend.scores[i]);
            });

            let friend = {
                name: ele.name,
                diffCount: diffCount
            }

            compareArr.push(friend);
        });
    
        let sortedArr = compareArr.sort((a, b) => { return a.diffCount - b.diffCount });

        postFriend(newFriend, sortedArr[0]);
    } else {
        postFriend(newFriend);
    }  
}

function postFriend(newFriend, match) {
    $.post('api/friends', newFriend)
    .then(data => {
        match ? $('#results').html(`<h3>${match.name}</h3>`) : $('#results').html(`<h3>No one's used this app yet (;-;)</h3>`);
    });
}