const container = document.querySelector('#container');
const content = document.createElement('div');

content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

// div z czarny border rozowy background i:
// <h1> z tekstem, <p> z tekstem, 

const p = document.createElement('div');
p.classList.add('p');
p.innerHTML = '<p>Hey I`m red!</p>';
p.style.color = 'red';
container.appendChild(p);

const h = document.createElement('div');
h.classList.add('h');
h.innerHTML = '<h3> I`m a blue h3 </h3>';
h.style.color = 'blue';
container.appendChild(h);

const div = document.createElement('div');
div.classList.add('div');
div.style.border = 'black';
div.style.backgroundColor = 'pink';
div.innerHTML = '<h1>I`m in a div</h1>' + '<p>Me too</p>';
container.appendChild(div);

const btn = document.querySelector('#btn');
btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });