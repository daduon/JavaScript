const url = "js/json.json";

fetch(url)

    .then(response => response.json())
    

// var result = {
//     "data": [
//         {
//             "id": 7,
//             "email": "michael.lawson@reqres.in",
//         }
//     ]
// };
// for (let i in result.data) {
//     for (let j in result.data[i]) {
//         console.log(result.data[i][j]);
//     }
// }


// var json = {
// jsonData: {
// one: [11, 12, 13, 14, 15],
// two: [21, 22, 23],
// three: [31, 32]
// }
// };

// for (var key in json.jsonData) {
//     for (var key1 in json.jsonData[key]) {
//         console.log(json.jsonData[key][key1])
//     }
// }