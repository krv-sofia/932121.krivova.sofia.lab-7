function generatePos(size) {
    const left = Math.random() * (window.innerWidth - size);
    const top = Math.random() * (window.innerHeight - size);
    return { left, top };
}

function generateSize() {
    return Math.random() * 300 + 50;
}

function generateId(type) {
    return `${type}-${Date.now() + Math.floor(Math.random() * 10000)}`;
}

const baseStyles = `
    position: absolute;
    cursor: pointer;
    opacity: 0.9;
`

function getStyles() {
    const size = generateSize();
    const {left, top} = generatePos(size);

    return `
        ${baseStyles}
        height: ${size}px;
        width: ${size}px;
        left: ${left}px;
        top: ${top}px;
    `;
}

function addSquares() {
    const amount = document.getElementById('input').value;
    
    for (let i = 0; i < amount; i++) {
        const sq = document.createElement('div');

        sq.style.cssText = getStyles();
        sq.style.backgroundColor = 'red';
        sq.style.border = '3px solid black';

        const sqId = generateId('square');
        sq.id = sqId;

        sq.ondblclick = function () {
            document.getElementById('container').removeChild(sq);
        };

        sq.onclick = function () {
            document.getElementById(sqId).style.backgroundColor = 'yellow';
        };
        
        const parent = document.getElementById('container');
        parent.appendChild(sq);
    }
}

function addTriangles() {
    const amount = document.getElementById('input').value;
    
    for (let i = 0; i < amount; i++) {
        const tr = document.createElement('div');

        tr.style.cssText = baseStyles;

        const size = generateSize();
        tr.style.border = `${size}px solid transparent`;
        tr.style.borderBottom = `${size}px solid blue`
        tr.style.boxSizing = 'border-box';

        const {left, top} = generatePos(size * 2);
        tr.style.left = left;
        tr.style.top = top;

        const trId = generateId('triangle');
        tr.id = trId;

        tr.ondblclick = function () {
            document.getElementById('container').removeChild(tr);
        };

        tr.onclick = function () {
            document.getElementById(trId).style.borderBottomColor = 'yellow';
        }

        const parent = document.getElementById('container');
        parent.appendChild(tr);
    }
}

function addCircles() {
    const amount = document.getElementById('input').value;

    for (let i = 0; i < amount; i++) {
        const circle = document.createElement('div');

        circle.style.cssText = getStyles();
        circle.style.backgroundColor = 'green';
        circle.style.border = '3px solid black';
        circle.style.borderRadius = '100%';

        const circleId = generateId('circle');
        circle.id = circleId;

        circle.ondblclick = function () {
            document.getElementById('container').removeChild(circle);
        };

        circle.onclick = function () {
            document.getElementById(circleId).style.backgroundColor = 'yellow';
        };
        
        const parent = document.getElementById('container');
        parent.appendChild(circle);
    }
}