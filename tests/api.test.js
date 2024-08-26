

test('API GET Request Test', async () => {

  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await response.json();

//   console.log(data);
  
  expect(response.status).toBe(200);
  expect(data.userId).toBe(1);
});