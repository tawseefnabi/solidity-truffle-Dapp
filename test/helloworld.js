const HelloWorld = artifacts.require("HelloWorld");


contract("HelloWorld", (accounts) => {
  // test to return my name
  it("should return my name", async () => {
    const helloWorld = await HelloWorld.deployed();
    const name = await helloWorld.getMyName.call();
    assert.equal(name, "Hello World");
  });

  // test for the changing my name
  it("should change my name", async () => {
    const helloWorld = await HelloWorld.deployed();
    await helloWorld.setMyName("Hello World 2");
    const name = await helloWorld.getMyName.call();
    assert.equal(name, "Hello World 2");
  });
})