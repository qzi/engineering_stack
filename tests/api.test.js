import request from "supertest"
import app from '../src/app'


test('API GET Request Test', async () => {

  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await response.json();

//   console.log(data);
  expect(response.status).toBe(200);
  expect(data.userId).toBe(1);
});



test('API GET Request Test from APP ', async () => {
  const response = await request(app).get('/api/users');
  // const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  // const data = await response.json();

  // console.log(response);
  expect(response.status).toBe(200);
  expect(response.text).toMatch("List of users");
});