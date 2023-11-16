export type Gym = {
  id: string;
  name: string;
  bio?: string;
  description?: string;
  instagramNick?: string;
  instagramAccountType?: string;
  instagramUrl?: string;
}

export const gyms: Gym[] = [
  {
    id: '1',
    name: 'NEO GYM',
    bio: '',
    description: 'Gym | Boxing Workouts | Fitness Bar | Sauna',
    instagramNick: 'neogym.armenia',
    instagramAccountType: 'Gym/Physical Fitness Center',
    instagramUrl: '/images/neogym.jpg',
  },
  {
    id: '2',
    name: 'Power Gym Premium Club',
    bio: '',
    description: '',
    instagramNick: 'powergympremiumclub',
    instagramAccountType: 'Gym/Physical Fitness Center',
    instagramUrl: '/images/powergym.jpg',
  },
  {
    id: '3',
    name: 'Action Fitness Gym',
    bio: '',
    description: '',
    instagramNick: 'actionfitnessyerevan',
    instagramAccountType: 'Gym/Physical Fitness Center',
    instagramUrl: '/images/actionfitness.jpg',
  },
]