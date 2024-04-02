// create the prompt for the user Froyo order
const froyoOrderString = prompt(
    "What would you like to order?",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);


// create array to separate by strings
const froyoOrder = froyoOrderString.split(","); // creates an array of ["vanilla", "vanilla", "vanilla", "strawberry", "coffee", "coffee"]

console.log(froyoOrder)


function countFroyoOrder() {
    // create empty  object to store the order count
    let orderCount = {}
    for (let i = 0; i < froyoOrder.length; i++) {
        let currentOrder = froyoOrder[i];
        if (currentOrder in orderCount) {
            orderCount[currentOrder] += 1;
        } else {
            orderCount[currentOrder] = 1;
        }
    } return orderCount;
}


// alt answer when using a for...of loop
// function countFroyoOrder() {
//     const orderCount = {};
//     for (let order of froyoOrder) {
//         if (orderCount[order]) {
//             orderCount[order] += 1;
//         } else {
//             orderCount[order] = 1;
//         }
//     } return orderCount;
// }

console.log(countFroyoOrder());
