const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, {[key]: value})
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign(driver, {[key]: value})
}
function deleteFromDriverByKey(driver, key) {
  const newDriver = Object.assign({}, driver, {[key]: value})
 delete driver.key
 return newDriver
}
function destructivelyDeleteFromDriverByKey(driver, key) {
  return driver = delete driver[key]
}
