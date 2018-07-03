

describe("index.html", () => {
  it("exists", () => {
    expect(document.querySelector('main')).toExist('add a <main> element to index.html')
    expect(document.querySelector('#test')).toExist('add an element with id "test"')
  })
})
