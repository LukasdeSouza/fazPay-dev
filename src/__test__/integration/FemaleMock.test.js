import { femaleProductsList } from "../../mockApi/femaleProductsList";

test('A lista de produtos femininos contém pelo menos um item', () => {
  expect(femaleProductsList).toHaveLength(1);
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

  expect(femaleProductsList[0]).toEqual(expectedItem);
});