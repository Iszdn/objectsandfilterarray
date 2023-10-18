// class String{
//     constructor(name) {
//         this.name = name;

//       }
// }
// new(x){
// if (x===this.name) {
//     console.log(true);
// }
// }
// let myNew=new String


// class Data{
//     constructor(...data){
//         this.data=[...data]
//     }
//     Search(value){
//     if (this.data.includes(value)) {
//         console.log(true);
//     }
//     else{
//         console.log(false);
//     }
// }
// }

// let myClass=new Data("salam","meyve","masin")
// myClass.Search("masin")

// class Data {
//     constructor(value) {
//         this.data = value
//     }
//     Search() {
//         let arr=[]
//         for (let index = 0; index < this.data; index++){
//             if (this.data % index === 0) {
//                 arr.push(index)

//             }

//         }console.log(arr);
//     }
// }
// let myClass = new Data(24)
// myClass.Search()













// class Ebob{
//     constructor(number){
//     this.number=number
//     }
//     Bolenler(){
// for (let i = 0; i < this.number; i++) {
//     if (this.number%i===0) {
//         console.log(i);
//     }

// }
//     }
// }
// let myNew=new Ebob(24)
// myNew.Bolenler()

// class Admin{
//     constructor(username,password){
//     this.username=username;
//     this.password=password;
// }
// Login(ad,sifre){
//     if (this.username===ad && this.password===sifre) {
//         console.log("Giris edildi");
//     }
//     else{
//         console.log("Giris edilmir");
//     }
// }
// }
// let myLog=new Login(prompt(ad,sifre))
// myLog.Login()
// insan olsun islere gjre miras alsin
// class Insan {
//     constructor(profession) {
//         this.profession = profession;
//     }
//     resent() {
//         return 'My profession is a' + this.profession;
//     }
// }
// class Doctor extends Insan {
//     constructor(profession, year) {
//         super(profession);
//         this.year = year;
//     }
//     docYear() {
//         return this.resent() + ' my age ' + this.year;
//     }
// }
// const myProfession = new Doctor(" doctor",  19);


// console.log(myProfession);
// console.log(myProfession.docYear());
arr = [
    {
        "id": 2,
        "description": "Sweet and savory sauces relishes spreads and seasonings",
        "name": "Condiments"
    },
    {
        "id": 1,
        "description": "Soft drinks coffees teas beers and ales",
        "name": "Beverages"
    },
    {
        "id": 3,
        "description": "Desserts candies and sweet breads",
        "name": "Confections"
    },
    {
        "id": 4,
        "description": "Cheeses",
        "name": "Dairy Products"
    },
    {
        "id": 5,
        "description": "Breads crackers pasta and cereal",
        "name": "Grains/Cereals"
    },
    {
        "id": 6,
        "description": "Prepared meats",
        "name": "Meat/Poultry"
    },
    {
        "id": 7,
        "description": "Dried fruit and bean curd",
        "name": "Produce"
    },
    {
        "id": 8,
        "description": "Seaweed and fish",
        "name": "Seafood"
    }
]
//  arr.sort((p1, p2) => (p1.id - p2.id));
// console.table(arr)
// arr.sort((p1, p2) => (p1.name > p2.name) ? 1 : (p2.name > p1.name) ?  -1 : 0);
// console.table(arr)
// arr.sort((p1, p2) => (p1.description > p2.description) ? 1 : (p2.description > p1.description) ? -1 : 0);
// console.table(arr)
let keyword="produce   "
let axtarilanSoz=arr.filter( i => i.name.toLowerCase().trim().includes( keyword.toLowerCase().trim() ) );
console.table(axtarilanSoz);