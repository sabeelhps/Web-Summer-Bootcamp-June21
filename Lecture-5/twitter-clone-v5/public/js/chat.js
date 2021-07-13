const socket = io();

async function loadMsgs() {
  const allMsgs = await axios.get("/allmessages");
  console.log(allMsgs);

  for (let msg of allMsgs.data) {
    $("#all-msg-container").append(
      `<li>
        <span>${msg.user}</span>
        <span>${msg.createdAt}</span>
        <p>${msg.content}</p>
      </li>`
    );
  }
}

loadMsgs();

$("#send-msg-btn").click(() => {
  const textMsg = $("#msg-text").val();

  socket.emit("send-msg", {
    user: currentUser,
    msg: textMsg,
  });

  $("#msg-text").val("");
});

socket.on("recived-msg", (data) => {
  $("#all-msg-container").append(
    `<li>
        <span>${data.user}</span>
        <span>${data.createdAt}</span>
        <p>${data.msg}</p>
      </li>`
  );
});
