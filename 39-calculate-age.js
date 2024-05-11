// Create a function calculateAge that takes a birthDate as input and returns the current age of the person. The birthDate will be provided in the format "YYYY-MM-DD".

// Requirements:

// The function must handle leap years and varying numbers of days in each month accurately.
// Consider the timezone difference and ensure the age is calculated based on the current date in your local time zone.
// The output should be the age in whole years.

const calculateAge = (birthDate) => {
    let todayDate = new Date();
    birthDate = new Date(birthDate);
    
    let age = todayDate.getFullYear() - birthDate.getFullYear();

    let monthDiff = todayDate.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || monthDiff === 0 && todayDate.getDate() < birthDate.getDate())
        {
            age--;
        }
    return age;
}

console.log(calculateAge("1990-05-15"));

// Checks if the current month is less than the birth month oe if it's the same month but today's date is before the birth date. If either condition is true, it subtracts one from the age because the birthday has not yet occured this year.