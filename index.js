const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, {[key]: value})
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign(driver, {[key]: value})
}
// function deleteFromDriverByKey(driver, key) {
//   const newDriver = driver
//   delete newDriver.name
//   return newDriver
// }
