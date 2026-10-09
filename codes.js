// you ruined the magic. WHY ARE YOU IN HERE, ASSHOLE!
const codes = {
  "YOUTUBE3": {
    type: "url",
    destination: "https://example.com"
  },

  "FREEVIDEO": {
    type: "page",
    destination: "video1.html"
  },

  "PUMKIN": {
    type: "message",
    destination: "CONGRATULATIONS. YOU HAVE DONE NOTHING."
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
