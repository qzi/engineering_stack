function addAsync(a, b, callback) {
    setTimeout(() => {
        const result = a + b;
        callback(result);
    }, 500)
}


test('add numbers async', done => {
    addAsync(10, 5, result => {
        expect(result).toBe(15);
        done();
    })
})