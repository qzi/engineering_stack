
// https://jestjs.io/zh-Hans/docs/asynchronous



const url = "https://jsonplaceholder.typicode.com/albums";

function initializeCityDatabase(){

}

function clearCityDatabase() {

}

beforeEach(() => {
  initializeCityDatabase();
});

afterEach(() => {
  clearCityDatabase();
});



async function fetchAlbums() {
  let res = await fetch(url);
  let albumJson = await res.json();
  return albumJson;
}


test('the data is peanut butter', async () => {

  return fetchAlbums().then(data => {
    // console.log(data);
    let i = data[0];
    expect(i.title).toContain('quidem');

  });
});


test('the fetch fails with an error', async () => {
  expect.assertions(true);
  try {
    await fetchAlbums();
  } catch (error) {
    expect(error).toMatch('error');
  }
});


test('value is true', () => {
  const b = true;
  expect(b).toBe(true); // Checks if value is exactly true
});