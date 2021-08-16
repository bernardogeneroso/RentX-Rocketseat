export interface Cars {
  id: string
  brand: string
  model: string
  fuel: 'electric' | 'hybrid' | 'diesel' | 'gasoline'
  price: {
    per_day: number
    currency: 'EUR' | 'USD'
  }
  images: string[]
}

export const cars: Cars[] = [
  {
    id: '1',
    brand: 'Lamborghini',
    model: 'Huracan',
    fuel: 'electric',
    price: {
      per_day: 580,
      currency: 'EUR',
    },
    images: [
      'https://i.imgur.com/s9gPZ76.png',
      'https://i.imgur.com/s9gPZ76.png',
      'https://i.imgur.com/s9gPZ76.png',
      'https://i.imgur.com/s9gPZ76.png',
    ],
  },
  {
    id: '2',
    brand: 'Volvo',
    model: 'XC40',
    fuel: 'diesel',
    price: {
      per_day: 260,
      currency: 'EUR',
    },
    images: [
      'https://i.imgur.com/GYJewJ6.png',
      'https://i.imgur.com/GYJewJ6.png',
      'https://i.imgur.com/GYJewJ6.png',
      'https://i.imgur.com/GYJewJ6.png',
    ],
  },
  {
    id: '3',
    brand: 'Audi',
    model: 'RS 5 Coupé',
    fuel: 'electric',
    price: {
      per_day: 120,
      currency: 'EUR',
    },
    images: [
      'https://i.imgur.com/up63W5w.png',
      'https://i.imgur.com/up63W5w.png',
      'https://i.imgur.com/up63W5w.png',
      'https://i.imgur.com/up63W5w.png',
    ],
  },
  {
    id: '4',
    brand: 'Porsche',
    model: 'Panamera',
    fuel: 'gasoline',
    price: {
      per_day: 340,
      currency: 'EUR',
    },
    images: [
      'https://i.imgur.com/rIOuwiv.png',
      'https://i.imgur.com/rIOuwiv.png',
      'https://i.imgur.com/rIOuwiv.png',
      'https://i.imgur.com/rIOuwiv.png',
    ],
  },
  {
    id: '5',
    brand: 'Chevrolet',
    model: 'Corvette Z06',
    fuel: 'gasoline',
    price: {
      per_day: 620,
      currency: 'EUR',
    },
    images: [
      'https://i.imgur.com/EjBxIzU.png',
      'https://i.imgur.com/EjBxIzU.png',
      'https://i.imgur.com/EjBxIzU.png',
      'https://i.imgur.com/EjBxIzU.png',
    ],
  },
  {
    id: '6',
    brand: 'Mitsubishi',
    model: 'Lancer Evo X',
    fuel: 'gasoline',
    price: {
      per_day: 290,
      currency: 'EUR',
    },
    images: [
      'https://i.imgur.com/FTXobkE.png',
      'https://i.imgur.com/FTXobkE.png',
      'https://i.imgur.com/FTXobkE.png',
      'https://i.imgur.com/FTXobkE.png',
    ],
  },
]
