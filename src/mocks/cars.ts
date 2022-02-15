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
    image: 'ae9200d5-c013-4390-9f2d-5277e2e70fc5.jpeg',
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
    image: '0d2b05ab-7c3b-4ee8-b0bf-68c4bc2699f8.jpeg',
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
    image: '9be935b5-8947-4506-9d35-f0535c07f758.jpeg',
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
    image: '01fed800-d7fd-496c-b61a-182b16e35868.jpeg',
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
    image: '6a2a29bf-e2ce-4a4e-9f4d-184466970b84.jpeg',
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
    image: 'babeb796-51b8-4d59-ab4c-822375c0499e.jpeg',
  },
];
