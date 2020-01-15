describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should say step one', async () => {
    await expect(element(by.text('Step One'))).toBeVisible();
  });
});
