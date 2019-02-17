import { generateQueryString } from './http';

test('http util-empty query string', () => {
  const generatedQs = generateQueryString();
  expect(generatedQs).toBe('');
});

test('http util-normal object', () => {
  const qsObject = { name: 'test', id: 10, isEnable: true };
  const expectedQs = 'name=test&id=10&isEnable=true';

  const generatedQs = generateQueryString(qsObject);
  expect(generatedQs).toBe(expectedQs);
});

test('http util-normal object with null value', () => {
  const qsObject = { name: 'value', id: null };
  const expectedQs = 'name=value';

  const generatedQs = generateQueryString(qsObject);
  expect(generatedQs).toBe(expectedQs);
});
