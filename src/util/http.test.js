import { generateQueryString, reverseOrder } from './http';

test('http util-generateQueryString-empty query string', () => {
  const generatedQs = generateQueryString();
  expect(generatedQs).toBe('');
});

test('http util-generateQueryString-normal object', () => {
  const qsObject = { name: 'test', id: 10, isEnable: true };
  const expectedQs = 'name=test&id=10&isEnable=true';

  const generatedQs = generateQueryString(qsObject);
  expect(generatedQs).toBe(expectedQs);
});

test('http util-generateQueryString-normal object with null value', () => {
  const qsObject = { name: 'value', id: null };
  const expectedQs = 'name=value';

  const generatedQs = generateQueryString(qsObject);
  expect(generatedQs).toBe(expectedQs);
});

test('http util-changeOrderDirection-no value', () => {
  const reversedOrder = reverseOrder(undefined, 'title', 'title');
  expect(reversedOrder).toBe('asc');
});

test('http util-changeOrderDirection-normal value', () => {
  const reversedOrder1 = reverseOrder('asc', 'title', 'title');
  expect(reversedOrder1).toBe('desc');
  const reversedOrder2 = reverseOrder('desc', 'title', 'title');
  expect(reversedOrder2).toBe('asc');
});

test('http util-changeOrderDirection-unnormal value', () => {
  const reversedOrder1 = reverseOrder('123', 'title', 'title');
  expect(reversedOrder1).toBe('asc');
});

test('http util-changeOrderDirection-column changed', () => {
  const reversedOrder1 = reverseOrder('asc', 'title', 'description');
  expect(reversedOrder1).toBe('asc');
  const reversedOrder2 = reverseOrder('desc', 'title', 'description');
  expect(reversedOrder2).toBe('asc');
});
