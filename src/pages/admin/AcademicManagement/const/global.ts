export const monthsName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]
export const genders = ["Male","Female","Other"];
export const bloodGroup = ["A+","A-","B+","B-","AB+","AB-","O+","O-"];

export const monthsOptions = monthsName.map((month) => ({
    value: month,
    label: month
}));
export const genderOptions = genders.map((item) => ({
    value: item.toLowerCase(),
    label: item
}));

export const bloodGroupOptions = bloodGroup.map((item) => ({
    value: item,
    label: item
}));
