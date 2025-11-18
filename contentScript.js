console.log("Nife Companion is active!");

// --- Mascot container ---
const mascot = document.createElement("div");
mascot.id = "nife-mascot";

// TEMP DESIGN (You will replace this with the real mascot later)
mascot.style.position = "fixed";
mascot.style.top = "150px";
mascot.style.left = "150px";
mascot.style.width = "60px";
mascot.style.height = "60px";
mascot.style.display = "flex";
mascot.style.alignItems = "center";
mascot.style.justifyContent = "center";
mascot.style.backgroundColor = "#ffb6fc";
mascot.style.color = "white";
mascot.style.fontSize = "32px";
mascot.style.borderRadius = "50%";
mascot.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";
mascot.style.zIndex = "999999";
mascot.style.pointerEvents = "none";

mascot.textContent = "✨";

document.body.appendChild(mascot);

let targetX = 150;
let targetY = 150;
let currentX = targetX;
let currentY = targetY;

document.addEventListener("mousemove", (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
});

function animateMascot() {
    currentX += (targetX - currentX) * 0.1;
    currentY += (targetY - currentY) * 0.1;

    mascot.style.transform = `translate(${currentX - 30}px, ${currentY}px)`;

    requestAnimationFrame(animateMascot);
}
animateMascot();