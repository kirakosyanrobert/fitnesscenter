export type Coach = {
  id: string;
  name: string;
  instagramNick?: string;
  imageUrl?: string;
  order: number;
}

export const coaches: Coach[] = [
  {
    id: '1',
    name: 'Alyona',
    instagramNick: 'alyonafadeeva',
    imageUrl: 'images/coaches/alyonafadeeva.jpg',
    order: 1,
  },
  {
    id: '2',
    name: 'Diana',
    instagramNick: 'diana_trainer.am',
    imageUrl: 'images/coaches/diana_trainer.am.jpg',
    order: 2,
  },
  {
    id: '3',
    name: 'Nina',
    instagramNick: 'nina_eganyan',
    imageUrl: 'images/coaches/nina_eganyan.jpg',
    order: 3,
  },
];






