

// function add(a,b){
//     return a + b 
// }
// add(10)(20)
//convert this into currying

// function add(a) {

//     return function (b) {
//         return a + b
//     }
// }

// console.log(add(10)(20))
// let curryAdd = add(10)
// curryAdd(20)

//Real world example

//creating utility function

//format currency

// function formatCurrency(currencySymbol) {
//     return function (amount) {
//         return `${currencySymbol}${amount.toFixed(2)}`
//     }
// }

// // formatCurrency($)(100)

// const formatUSD = formatCurrency('$');
// const formatEUR = formatCurrency('€');
// const formatRUPEES = formatCurrency('₹');

// console.log(formatUSD(100))
// console.log(formatEUR(50))
// console.log(formatRUPEES(500))


//data transformation

// function filterByCondition(condition) {
//     return function (data) {
//         return data.filter(item => condition(item))
//     }
// }

// const isEven = (num) => num % 2 === 0;

// const filterByEvenNumbers = filterByCondition(isEven);


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log(filterByEvenNumbers(numbers))




// const loginBtn = document.getElementById('loginBtn')
// const logoutBtn = document.getElementById('logoutBtn')


// loginBtn.addEventListener('click', handleLogin)

// logoutBtn.addEventListener('click', handleLogout)



// function handleButtonClick(buttonId, action){
//     const button = document.getElementById(buttonId)
//     button.addEventListener('click', action)
// }

// function login(){

// }
// function logout(){
    
// }

// handleButtonClick('loginBtn', login)
// handleButtonClick('logoutBtn', logout)











