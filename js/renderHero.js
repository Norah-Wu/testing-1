const app = document.querySelector('#app');

const hero = document.createElement('main');
hero.className = 'hero';
hero.setAttribute('aria-labelledby', 'page-title');

const title = document.createElement('h1');
title.id = 'page-title';
title.textContent = 'Hello Codex!';

const description = document.createElement('p');
description.textContent = 'Step into a polished glassmorphism experience with luminous gradients, animated color orbs, and a bold call-to-action built for first impressions.';

const actions = document.createElement('div');
actions.className = 'actions';

const startButton = document.createElement('button');
startButton.type = 'button';
startButton.textContent = 'Start';

actions.append(startButton);
hero.append(title, description, actions);
app.append(hero);
