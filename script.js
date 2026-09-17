const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

const toolbarButtons = document.querySelectorAll(".composer-toolbar button");
const messageBox = document.getElementById("message");
const fileInput = document.getElementById("fileInput");
const fileNote = document.getElementById("fileNote");

toolbarButtons.forEach(button => {
  button.addEventListener("click", () => {
    if (!messageBox) return;

    const format = button.dataset.format;
    const start = messageBox.selectionStart;
    const end = messageBox.selectionEnd;
    const selectedText = messageBox.value.slice(start, end);

    let insertText = "";

    if (format === "bold") {
      insertText = selectedText ? `**${selectedText}**` : "**bold text**";
    }

    if (format === "italic") {
      insertText = selectedText ? `_${selectedText}_` : "_italic text_";
    }

    if (format === "list") {
      insertText = selectedText ? `\n• ${selectedText}` : "\n• First point\n• Second point";
    }

    if (format === "emoji") {
      insertText = " 😊";
    }

    messageBox.value =
      messageBox.value.slice(0, start) + insertText + messageBox.value.slice(end);

    messageBox.focus();
  });
});

if (fileInput && fileNote) {
  fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];

    if (file) {
      fileNote.textContent = `Selected file: ${file.name}. Attach it manually after your email app opens.`;
    }
  });
}

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", event => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subjectInput = document.getElementById("subjectInput").value;
    const message = document.getElementById("message").value;

    const subject = encodeURIComponent(subjectInput);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:hinazago@gmail.com?subject=${subject}&body=${body}`;
  });
}