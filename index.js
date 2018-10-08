// Code your solution in this file.
function lowerCaseDrivers (drivers) {
    return drivers.map(driver => {
        return driver.toLowerCase();
    });
};

function nameToAttributes(drivers) {
    return drivers.map(driver => {
        let driverName = {};
        let names = driver.split(' ');
        driverName.firstName = names[0];
        driverName.lastName = names[1];
        return driverName;
    });
};

function attributesToPhrase(drivers) {
    return drivers.map(driver => {
        return `${driver.name} is from ${driver.hometown}`;
    });
};