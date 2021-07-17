const socket = io();

async function loadMsgs() {
  const allMsgs = await axios.get("/allmessages");
  console.log(allMsgs);

  for (let msg of allMsgs.data) {

    const time = timeDifference(new Date(),new Date(msg.createdAt))

    $("#all-msg-container").append(
      `<li>
        <span>${msg.user}</span>
        <p>${msg.content}</p>
        <div>
          <span>${time}</span>
        </div>
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
  
  const time = timeDifference(new Date(),new Date(data.createdAt))
  
  $("#all-msg-container").append(
    `<li>
        <span>${data.user}</span>
        <span>${time}</span>
        <p>${data.msg}</p>
      </li>`
  );
});


function timeDifference(current, previous) {
  var msPerMinute = 60 * 1000;
  var msPerHour = msPerMinute * 60;
  var msPerDay = msPerHour * 24;
  var msPerMonth = msPerDay * 30;
  var msPerYear = msPerDay * 365;

  var elapsed = current - previous;

  if (elapsed < msPerMinute) {
    if (elapsed / 1000 < 30) {
      return "Just now";
    }

    return Math.round(elapsed / 1000) + " seconds ago";
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + " minutes ago";
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + " hours ago";
  } else if (elapsed < msPerMonth) {
    return Math.round(elapsed / msPerDay) + " days ago";
  } else if (elapsed < msPerYear) {
    return Math.round(elapsed / msPerMonth) + " months ago";
  } else {
    return Math.round(elapsed / msPerYear) + " years ago";
  }
}