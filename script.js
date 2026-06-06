const app = document.querySelector('#app');

const title = document.createElement('h1');
title.textContent = 'Hello Codex!';

const description = document.createElement('p');
description.textContent = 'This is my first test page.';

const button = document.createElement('button');
button.textContent = 'Start';

app.append(title, description, button);
