//console.log("Hello, World!"); 

const emojiCodes = [128512, 128514, 128525, 129409, 128526, 128640, 127829, 128054, 127881, 128293, 127752, 128142];

const gallery = document.getElementById("gallery");

function showEmojis(count = emojiCodes.length) {
    gallery.innerHTML = "";

    for (let i = 0; i < count; i++) {
        const code  = emojiCodes[i];

        const card = document.createElement("div");
        card.className = "card";

        const emoji = document.createElement("span");
        emoji.className = "emoji";
        emoji.textContent = String.fromCodePoint(code);

        const label = document.createElement("span");
        label.className = "code";
        label.textContent = code; 

        card.append(emoji, label);
        gallery.append(card);
    }
}