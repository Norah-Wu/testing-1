const app = document.querySelector('#app');

const hero = document.createElement('main');
hero.className = 'hero';
hero.setAttribute('aria-labelledby', 'page-title');

const title = document.createElement('h1');
title.id = 'page-title';
title.className = 'hero-title';
title.textContent = 'Hello Codex!';

const description = document.createElement('p');
description.className = 'hero-copy';
description.textContent = 'A simple, polished landing page rendered with JavaScript and mounted into one root container.';

const actions = document.createElement('div');
actions.className = 'hero-actions';

const startButton = document.createElement('button');
startButton.className = 'hero-button';
startButton.type = 'button';
startButton.textContent = 'Start';

actions.append(startButton);
hero.append(title, description, actions);
app.append(hero);
