const track = document.getElementById("track");
if (track) {
  const copies = [...track.children].map(el => {
    const clone = el.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    return clone;
  });
  copies.forEach(c => track.appendChild(c));
}

const yr = document.getElementById("yr");
if (yr) yr.textContent = new Date().getFullYear();