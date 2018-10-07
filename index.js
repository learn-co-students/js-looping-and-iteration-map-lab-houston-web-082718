function lowerCaseDrivers(arr) {
  const lowercased = arr.map(x => x.toLowerCase())
  return lowercased
}

function nameToAttributes(drivers) {
  const new_array = drivers.map(name => {
    const splitName = name.split(' ')
    return {firstName: splitName[0], lastName: splitName[1]}
  })
  return new_array
}

function attributesToPhrase(drivers) {
  drivers = drivers.map(driver => {
    return `${driver.name} is from ${driver.hometown}`
  })
  return drivers
}
