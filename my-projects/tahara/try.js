// // Import the 'promises' module from the 'fs' module
// import { promises as fsPromises } from 'fs';

// const a = [];
// const d = new Date(949433530948);
// let iterationCount = 0;

// async function fetchAndLogDate() {
//     if (iterationCount >= 18000) {
//         // Exit the loop when the desired iteration count is reached
//         console.log("Finished!");

//         // Write the array 'a' to a JSON file
//         try {
//             await fsPromises.writeFile('dates.json', JSON.stringify(a, null, 2));
//             console.log('Data has been written to dates.json');
//         } catch (err) {
//             console.error('Error writing to dates.json', err);
//         }

//         return;
//     }

//     iterationCount++;
//     d.setDate(d.getDate() + 1);
//     console.log(`Date: ${d.getFullYear()}-${(d.getMonth() + 1) >= 10 ? (d.getMonth() + 1) : "0" + (d.getMonth() + 1)}-${(d.getDate()) >= 10 ? (d.getDate()) : "0" + (d.getDate())}`);

//     try {
//         const response = await fetch(`https://www.hebcal.com/converter?cfg=json&date=${d.getFullYear()}-${(d.getMonth() + 1) >= 10 ? (d.getMonth() + 1) : "0" + (d.getMonth() + 1)}-${(d.getDate()) >= 10 ? (d.getDate()) : "0" + (d.getDate())}&g2h=1&strict=1`);
//         const data = await response.json();
//         a.push(data);
//         console.log("scs");
//     } catch (err) {
//         console.log("err", err);
//     }

//     // Call the function recursively after a 5-second delay
//     setTimeout(fetchAndLogDate, 10);
// }

// // Start the process
// fetchAndLogDate();

import fs from 'fs';

// Read the JSON file
const rawData = fs.readFileSync('HebrewDates.json', 'utf-8');
const data = JSON.parse(rawData);

// Function to get the day of the week as a number (Sunday = 0, Monday = 1, ..., Saturday = 6)
const getDayInWeek = (year, month, day) => {
    const date = new Date(year, month - 1, day); // Month is 0-indexed
    return date.getDay();
};

// Add "dayInWeek" property to each object in the array
data.forEach(item => {
    const { gy, gm, gd } = item;
    item.dayInWeek = getDayInWeek(gy, gm, gd) + 1; // Adding 1 to make Sunday = 1, Monday = 2, ..., Saturday = 7
});

// Save the modified array back to the JSON file
const modifiedData = JSON.stringify(data, null, 2); // Adding 2 spaces for better formatting
fs.writeFileSync('HebrewDates.json', modifiedData);

console.log('Modification complete. Check your_json_file_modified.json');
