// you ruined the magic. WHY ARE YOU IN HERE!
const codes = {
  "YOUTUBE3": {
    type: "url",
    destination: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },

  "FREEVIDEO": {
    type: "page",
    destination: "video1.html"
  },

  "PUMKIN": {
    type: "message",
    destination: "CONGRATULATIONS. YOU HAVE DONE NOTHING."
    },

  "CHEESEBOY": {
    type: "message",
    destination: "WATCH ON THE CHANNEL!"
  }
};

function activateCode(input) {
  const code = input.trim().toUpperCase();
  const result = codes[code];

  if (!result) {
    return "INVALID CODE.";
  }

  if (result.type === "page" || result.type === "url") {
    window.location.href = result.destination;
    return "";
  }

  if (result.type === "message") {
    return result.destination;
  }

  return "CODE ERROR.";
}
