interface Person {
    firstName: string;
    lastName: string;
}
let contenElement: HTMLDivElement = <HTMLDivElement>document.getElementById("content");
let inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById("myInput");
let buttonElement: HTMLButtonElement = <HTMLButtonElement>document.getElementById("myButton");
let buttonElement2: HTMLButtonElement = <HTMLButtonElement>document.getElementById("myButton2");
let fromselect: HTMLSelectElement = <HTMLSelectElement>document.getElementById("select");
//let forselect: string = fromselect.value;
let newtext;
buttonElement.addEventListener("click",
() => {
    console.log("button click");
//let forselect: string = fromselect.options[fromselect.selectedIndex].value;
let inputElements: String = inputElement.value;
console.log(inputElements.toLocaleUpperCase( ))
newtext = inputElements.toLocaleUpperCase;
let forapp: string = inputElements.toLocaleUpperCase( );

var n = document.createElement("li");
var nt = document.createTextNode(forapp)
n.appendChild(nt);
document.getElementById("mulist").appendChild(n);
    
});
buttonElement2.addEventListener("click",
() => {
    console.log("button click");
//let forselect: string = fromselect.options[fromselect.selectedIndex].value;
    
        
        let inputElements: String = inputElement.value;
        console.log(inputElements.toLowerCase( ))
        newtext = inputElements.toLowerCase
        let forapp: string = inputElements.toLowerCase( );
        var n = document.createElement("li");
        var nt = document.createTextNode(forapp)
        n.appendChild(nt);
        document.getElementById("mulist").appendChild(n);
});

var str = "Apples are round, and Apples are Juicy."; 
console.log(str.toUpperCase( ));




function greeter(person: Person): string {
    return "Hello, " + person.firstName + " " + person.lastName;
}
let user: Person = { firstName: "John", lastName: "Doe" };

let element: HTMLDivElement = <HTMLDivElement> document.getElementById("content");
element.innerHTML = greeter(user);