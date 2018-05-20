const driver = {name: "Sam"}

function updateDriverWithKeyAndValue(driver, key, value) {
  const newDriver = {...driver}
  newDriver.address = "11 Broadway"
  return newDriver
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver.address = "12 Broadway"
  return driver
}
function deleteFromDriverByKey(driver, key) {
  const newDriver = delete driver.name
  return newDriver
}
