import { jewelryProductsList } from "../../mockApi/jewelryProductsList";

test('A lista de produtos joalheria contém pelo menos um item', () => {
  expect(jewelryProductsList).toHaveLength(1);
});

test('O item na lista tem as propriedades corretas', () => {
  const expectedItem = {
    id: expect.any(Number),
    img: expect.any(String),
    name: expect.any(String),
    price: expect.any(Number),
    currency: expect.any(String),
    quantity: expect.any(Number),
  };

  expect(jewelryProductsList[0]).toEqual(expectedItem);
});