// Create a floating box
const box = document.createElement('div');
box.textContent = "I'm a plugin box!";
box.style.position = 'fixed';
box.style.top = '20px';
box.style.right = '20px';
box.style.width = '200px';
box.style.height = '100px';
box.style.backgroundColor = 'white';
box.style.border = '2px solid black';
box.style.padding = '10px';
box.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
box.style.zIndex = '999';
box.style.fontFamily = 'Arial, sans-serif';
box.style.textAlign = 'center';
box.style.display = 'flex';
box.style.justifyContent = 'center';
box.style.alignItems = 'center';

document.body.appendChild(box);
console.log("Plugin applied: Floating box displayed.");
