import { nanoid } from 'nanoid';

const navItems = [
  {
    id: nanoid(),
    to: '/',
    text: 'Home',
  },
  {
    id: nanoid(),
    to: '/movies',
    text: 'Movies',
  },
];

export default navItems;
