import { createReducer, on } from '@ngrx/store';
import { MovieInterface } from '../types/movie.interface';

export interface State {
  crime: MovieInterface[];
  comedy: MovieInterface[];
}

export const initialState: State = {
  crime: [
    {
      id: 1,
      name: 'The Shawshank Redemption',
      category: 'Thriller/Crime',
      age: '16',
      release: '1994',
      score: '9.3',
      totalScore: '2.8mi',
      duration: '2h 22 min',
      image: 'assets/um-sonho-de-liberdade.jpeg',
      description:
        'Two imprisoned men reunite over the course of several years, finding solace and eventual redemption through acts of common decency.',
    },
    {
      id: 2,
      name: 'The Godfather',
      category: 'Thriller/Crime',
      age: '14',
      release: '1972',
      score: '9.2',
      totalScore: '2.3mi',
      duration: '2h 55 min',
      image: 'assets/poderoso-chefao.jpeg',
      description:
        'The aging patriarch of an organized crime dynasty passes control of his clandestine empire to his reluctant son.',
    },
    {
      id: 3,
      name: 'The Dark Knight ',
      category: 'Action/Crime',
      age: '12',
      release: '2008',
      score: '9.0',
      totalScore: '2.8mi',
      duration: '2h 32 min',
      image: 'assets/batman.jpg',
      description:
        'Now with the help of Lieutenant Jim Gordon and District Attorney Harvey Dent, Batman has what it takes to banish crime from Gotham City once and for all. But soon, the three will fall victim to the Joker, who intends to throw Gotham into anarchy.',
    },
    {
      id: 4,
      name: 'Pulp Fiction ',
      category: 'Action/Crime',
      age: '18',
      release: '1994',
      score: '8.9',
      totalScore: '2.2mi',
      duration: '2h 34 min',
      image: 'assets/pulp-fiction.jpg',
      description:
        'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of thugs intertwine in four stories of violence and redemption.',
    },
    {
      id: 5,
      name: 'Fight Club ',
      category: 'Action/Crime',
      age: '18',
      release: '1999',
      score: '8.8',
      totalScore: '2.3mi',
      duration: '2h 19 min',
      image: 'assets/clube-luta.jpg',
      description:
        'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of thugs intertwine in four stories of violence and redemption.',
    },
    {
      id: 6,
      name: 'Joker ',
      category: 'Action/Crime',
      age: '16',
      release: '2019',
      score: '8.8',
      totalScore: '2.3mi',
      duration: '2h 2 min',
      image: 'assets/coringa.webp',
      description:
        'A failed comedian goes crazy and becomes a psychopathic killer.',
    },
  ],
  comedy: [
    {
      id: 7,
      name: 'Léo',
      category: 'Animation',
      age: '10',
      release: '2023',
      score: '7.0',
      totalScore: '9.7mi',
      duration: '1h 42 min',
      image: 'assets/leo.webp',
      description: `Leo, a lizard, has been trapped in a Florida classroom for decades. Upon discovering that he only has one year left to live, he comes up with an escape to make the most of the time he has left, but ends up involved in the students' problems with a cruel teacher.`,
    },
    {
      id: 8,
      name: 'Trolls 3',
      category: 'Animation',
      age: '10',
      release: '2023',
      score: '5.9',
      totalScore: '6.1mi',
      duration: '1h 35 min',
      image: 'assets/trolls.webp',
      description: `As they get closer, Poppy discovers that Tronco was part of her favorite boyband phenomenon, BroZone, with her four brothers. When one of their own, Floyd, is kidnapped by villains, Tronco and Poppy embark on a journey to rescue him.`,
    },
    {
      id: 9,
      name: 'The Grinch',
      category: 'Animation',
      age: '10',
      release: '2018',
      score: '6.4',
      totalScore: '82mi',
      duration: '1h 25 min',
      image: 'assets/grinch.jpg',
      description: `A grumpy Grinch plans to ruin Christmas for the town of Whoville.`,
    },
    {
      id: 10,
      name: 'Super Mario Bross',
      category: 'Animation',
      age: '10',
      release: '2023',
      score: '7.1',
      totalScore: '206mi',
      duration: '1h 32 min',
      image: 'assets/mario.jpg',
      description: `A plumber named Mario needs to save his brother Luigi from the claws of the king of Koopas, Bowser. To do this, he counts on the help of the princess of the Mushroom Kingdom, Peach, and his friends Toad and Donkey Kong.`,
    },
    {
      id: 11,
      name: 'Garfield The Movie',
      category: 'Animation',
      age: '10',
      release: '2024',
      score: '9.9',
      totalScore: '10mi',
      duration: '2h 45 min',
      image: 'assets/garfield.jpg',
      description: `After an unexpected reunion with his long-lost father, the ragged alley cat Vic, Garfield and his canine friend Odie are forced from their perfectly pampered lives to join Vic on a risky heist.`,
    },
    {
      id: 12,
      name: 'The Nightmare Before Christmas',
      category: 'Animation',
      age: 'free',
      release: '1993',
      score: '7.9',
      totalScore: '367mil',
      duration: '1h 16 min',
      image: 'assets/jack.jpg',
      description: `Jack Skellington, the king of Halloween Town, discovers Christmas Town, but his attempts to bring Christmas into Halloween cause confusion.`,
    },
  ],
};

export const moviesReducer = createReducer(initialState);
