document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const cursor = document.createElement('div');
    cursor.id = 'cursor';
    body.appendChild(cursor);

    let trail = [];
    const trailLength = 20;

    function createTrailElement() {
        const element = document.createElement('div');
        element.className = 'cursor-trail';
        body.appendChild(element);
        return element;
    }

    for (let i = 0; i < trailLength; i++) {
        trail.push({
            element: createTrailElement(),
            x: 0,
            y: 0
        });
    }

    let mouseX = 0;
    let mouseY = 0;
    let prevMouseX = 0;
    let prevMouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.left = `${mouseX}px`;
        cursor.style.top = `${mouseY}px`;
    });

    function updateTrail() {
        const dx = mouseX - prevMouseX;
        const dy = mouseY - prevMouseY;
        const angle = Math.atan2(dy, dx);

        trail.forEach((point, index) => {
            const nextPoint = trail[index + 1] || {x: mouseX, y: mouseY};
            point.x += (nextPoint.x - point.x) * 0.3;
            point.y += (nextPoint.y - point.y) * 0.3;

            const elementAngle = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x);
            const length = Math.sqrt(Math.pow(nextPoint.x - point.x, 2) + Math.pow(nextPoint.y - point.y, 2));

            point.element.style.left = `${point.x}px`;
            point.element.style.top = `${point.y}px`;
            point.element.style.height = `${length}px`;
            point.element.style.transform = `rotate(${elementAngle}rad)`;
            point.element.style.opacity = 1 - (index / trailLength);
        });

        prevMouseX = mouseX;
        prevMouseY = mouseY;

        requestAnimationFrame(updateTrail);
    }

    updateTrail();
});