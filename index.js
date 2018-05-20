const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, {[key]: value})
}
// function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
//   driver.address = "12 Broadway"
//   return driver
// }
// function deleteFromDriverByKey(driver, key) {
//   const newDriver = driver
//   delete newDriver.name
//   return newDriver
// }
