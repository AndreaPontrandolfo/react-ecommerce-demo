import faker, { random, lorem, commerce } from "faker";
faker.seed(10);

const mockItem = function () {
  const image = `https://picsum.photos/300/400?random=${random.number(
    100
  )}.webp`;

  return [
    {
      id: random.number(),
      name: commerce.product(),
      image,
      description: lorem.paragraph(),
      sku: random.uuid().slice(0, 8).toUpperCase(),
      isAvailable: random.boolean(),
      isOnSale: random.boolean(),
      price: random.number({
        min: 500,
        max: 1500,
      }),
    },
  ];
};

function generateSeed(generator, clonesMultiplier) {
  let arrayToAlter = [];
  for (let index = 0; index < clonesMultiplier; index++) {
    arrayToAlter = arrayToAlter.concat(generator());
  }
  return arrayToAlter;
}

export const mocks = generateSeed(mockItem, 100);
