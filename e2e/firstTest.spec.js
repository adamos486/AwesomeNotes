describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should say hello to everyone!', async () => {
    await expect(element(by.text('Hello, William!'))).toBeVisible();
    await expect(element(by.text('Hello, Adam!'))).toBeVisible();
    await expect(element(by.text('Hello, Jeff!'))).toBeVisible();
    await expect(element(by.text('Hello, Garret!'))).toBeVisible();
  });
});
