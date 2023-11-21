export type GenderType = 'man' | 'woman';

export type Coach = {
  id: string;
  name: string;
  instagramNick?: string;
  imageUrl?: string;
  order: number;
  gender: GenderType;
}

export const coaches: Coach[] = [
  {
    id: '1',
    name: 'Alyona',
    instagramNick: 'alyonafadeeva',
    imageUrl: 'images/coaches/alyonafadeeva.jpg',
    order: 1,
    gender: 'woman',
  },
  {
    id: '2',
    name: 'Diana',
    instagramNick: 'diana_trainer.am',
    imageUrl: 'images/coaches/diana_trainer.am.jpg',
    order: 2,
    gender: 'woman',
  },
  {
    id: '3',
    name: 'Nina',
    instagramNick: 'nina_eganyan',
    imageUrl: 'images/coaches/nina_eganyan.jpg',
    order: 3,
    gender: 'woman',
  },
  {
    id: '4',
    name: 'Janna',
    instagramNick: 'fitnesstrainer__janna',
    imageUrl: 'images/coaches/fitnesstrainer__janna.jpg',
    order: 4,
    gender: 'woman',
  },
  {
    id: '5',
    name: 'Sevak',
    instagramNick: 'sevak.coach',
    imageUrl: 'images/coaches/sevak.coach.jpg',
    order: 5,
    gender: 'man',
  },
  {
    id: '6',
    name: 'Mher',
    instagramNick: 'mher_tavakalyan',
    imageUrl: 'images/coaches/mher_tavakalyan.jpg',
    order: 6,
    gender: 'man',
  },
  {
    id: '7',
    name: 'Karen',
    instagramNick: 'karen_personal_fit_traine',
    imageUrl: 'images/coaches/karen_personal_fit_traine.jpg',
    order: 7,
    gender: 'man',
  },
  {
    id: '8',
    name: 'Albert',
    instagramNick: 'albert.tonoyan',
    imageUrl: 'images/coaches/albert.tonoyan.jpg',
    order: 8,
    gender: 'man',
  },
];






