import { maleProductsList } from "../../mockApi/maleProductsList";

test('A lista de produtos joalheria contém pelo menos um item', () => {
  expect(maleProductsList).toHaveLength(1);
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

  expect(maleProductsList[0]).toEqual(expectedItem);
});