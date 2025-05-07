const toggleBtn = document.getElementById('toggle-lyrics');
const lyricsDiv = document.getElementById('lyrics');
const lyricsText = `
不要妳離開 距離隔不開
思念變成海 在窗外進不來
原諒說太快 愛成了阻礙
手中的風箏放太快回不來
`;

let typedIndex = 0;
let typingInterval;

function startTyping() {
  lyricsDiv.textContent = "";
  lyricsDiv.classList.remove("hidden");
  toggleBtn.textContent = "Hide Lyrics";
  typedIndex = 0;

  typingInterval = setInterval(() => {
    if (typedIndex < lyricsText.length) {
      lyricsDiv.textContent += lyricsText[typedIndex++];
    } else {
      clearInterval(typingInterval);
    }
  }, 80);
}

function resetLyrics() {
  clearInterval(typingInterval);
  lyricsDiv.textContent = "";
  lyricsDiv.classList.add("hidden");
  toggleBtn.textContent = "Show Lyrics";
}

toggleBtn.addEventListener("click", () => {
  if (lyricsDiv.classList.contains("hidden")) {
    startTyping();
  } else {
    resetLyrics();
  }
});

const audio = document.querySelector("audio");
const coverOverlay = document.getElementById("cover-overlay");

audio.addEventListener("play", () => {
  coverOverlay.classList.remove("hidden");
});

coverOverlay.addEventListener("click", () => {
  audio.pause();
  coverOverlay.classList.add("hidden");
});


const form = document.getElementById("comment-form");
const commentList = document.getElementById("comment-list");

if (form && commentList) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && message) {
      const commentDiv = document.createElement("div");
      commentDiv.classList.add("comment");
      commentDiv.innerHTML = `<strong>${name}</strong><p>${message}</p>`;
      commentList.prepend(commentDiv);
      form.reset();
    }
  });
}
