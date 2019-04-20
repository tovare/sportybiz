import { define, html } from 'https://unpkg.com/hybrids@2.0.2/src/index.js';

function increaseCount(host) {
  host.count += 1;
}

const SimpleCounter = {
  count: 0,
  render: ({ count }) => html`
    <button onclick="${increaseCount}">
      Count: ${count}
    </button>
  `,
};

define('simple-counter', SimpleCounter);