```javascript
// Mengambil elemen cahaya
const cursor = document.querySelector(".cursor");


// Ketika mouse bergerak
document.addEventListener("mousemove", (event) => {

    // Posisi mouse horizontal
    const mouseX = event.clientX;

    // Posisi mouse vertikal
    const mouseY = event.clientY;


    // Memindahkan cahaya
    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";

});
```
