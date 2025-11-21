// class person{
//     constructor(){
//         this.species="Homo sapines"
//     }
//     eat(){
//         console.log("I am eating.....")
//     }
//     sleep(){
//         console.log("I am sleeping.....")
//     }
// }
// class Engineer extends person{
//     constructor(branch){
//         super()
//         this.branch=branch
//     }
//     work(){
//         console.log("I am developing.....")
//     }
// }
// let swarajObj=new Engineer("CSE")


Data="Old values"
class User{
    constructor(name,email){
        this.name=name
        this.email=email
    }
    viewData(){
        console.log("Data: ",Data)
        console.log("Name ",this.name)
        console.log("Email ",this.email)
       

    }

}
class Admin extends User{
    constructor(name,email){
        super(name,email)
    }
    editData(name,email){
        Data="new values entered"
        super.viewData(name,email)
    }
}
let userObj= new User("swaraj","swarajsah13@gmail.com")
let adminObj=new Admin("Sanu","sanusahs@gmail.com")