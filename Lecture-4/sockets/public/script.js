const socket = io();

$('#send-btn').click(() => {

    socket.emit('send-msg', {
        msg: $('#inp').val()
    })

    $('#inp').val("");

})

socket.on('received-msg', (data) => {

    $('#chat').append(`<li>${data.id} ----> ${data.msg}</li>`)

    console.log(data);
})