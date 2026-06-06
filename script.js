const app = document.querySelector('#app');

const scene = document.createElement('main');
scene.className = 'ski-scene';

const sky = document.createElement('div');
sky.className = 'sky';

const sun = document.createElement('div');
sun.className = 'sun';

const mountains = document.createElement('div');
mountains.className = 'mountains';

const slope = document.createElement('div');
slope.className = 'slope';

const snowboard = document.createElement('div');
snowboard.className = 'snowboard';

const content = document.createElement('section');
content.className = 'content-card';

const title = document.createElement('h1');
title.textContent = 'Hello Codex!';

const description = document.createElement('p');
description.textContent = 'This is my first test page.';

const button = document.createElement('button');
button.textContent = 'Start';

content.append(title, description, button);

for (let i = 0; i < 18; i += 1) {
  const snowflake = document.createElement('span');
  snowflake.className = 'snowflake';
  snowflake.style.left = `${Math.random() * 100}%`;
  snowflake.style.animationDelay = `${Math.random() * 6}s`;
  snowflake.style.animationDuration = `${5 + Math.random() * 5}s`;
  sky.append(snowflake);
}

for (let i = 0; i < 4; i += 1) {
  const skier = document.createElement('span');
  skier.className = `distant-skier skier-${i + 1}`;
  slope.append(skier);
}

sky.append(sun, mountains);
scene.append(sky, slope, snowboard, content);
app.append(scene);
