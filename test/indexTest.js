

describe("index.html", () => {
  it("exists", () => {
    expect(document.querySelector('main')).to.exist
    expect(testVar).to.equal('hi')
  })
})
