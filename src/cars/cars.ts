import { Car } from 'src/models/car';

export const cars: Car[] = [
  {
    id: 1,
    name: 'Mercedes-Benz A-Class',
    model: {
      id: 1,
      name: 'Mercedes-Benz',
    },
    color: 'Silver',
    year: 2018,
  },
  {
    id: 2,
    name: 'Mercedes-Benz C-Class',
    model: {
      id: 1,
      name: 'Mercedes-Benz',
    },
    color: 'Grey',
    year: 2021,
  },
  {
    id: 3,
    name: 'Lexus ES VII',
    model: {
      id: 2,
      name: 'Lexus',
    },
    color: 'Silver',
    year: 2021,
  },
  {
    id: 4,
    name: 'Lexus NX',
    model: {
      id: 2,
      name: 'Lexus',
    },
    color: 'Grey',
    year: 2021,
  },
  {
    id: 5,
    name: 'BMW M240i xDrive Coupe',
    model: {
      id: 3,
      name: 'BMW',
    },
    color: 'Black',
    year: 2021,
  },
  {
    id: 6,
    name: 'BMW X3',
    model: {
      id: 3,
      name: 'BMW',
    },
    color: 'Black',
    year: 2022,
  },
];
