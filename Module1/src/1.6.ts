{
    //Learning Function
//Normal Function
//Arrow Function


//default value 10 set kora hoise
function add(num1 : number,num2 : number = 10){
    return num1+num2;
}
add(2,2);

const addArrow = (num1:number,num2:number): number => num1+num2;

//object er moddhe function thakle setake method boli
//Object er moddhe function sobsomoy normal hobe
const pooruser = {
    name:'Mezba',
    balance:0,
    //normal anonymous function
    addBalance(balance:number) : string{
          return `My new balance is: ${this.balance+ balance}`;
    }
}

//callback function
const arr : number[] = [1,4,10]

const newArray: number[] = arr.map((element:number) :number => element*element);
}