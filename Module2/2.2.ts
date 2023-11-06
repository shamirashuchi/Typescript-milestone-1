{
    //interface
    //sokol primitive er khettre type allias bebohar korbo
    //object er khettre type alias othoba interface bebohar korbo
    type User1 = {
        name:string;
        age: number;
    };

    interface User2{
        name:string;
        age:number;
    };

    //use intersection(&) to add property in type alias User1
    type userWithRoll1 = User1 & {role : string};


    //type User1 ke extens kore interface banaisi
    //interface can be type
    interface userWithRoll2 extends User1{
        role:string
    };

    const user1 : userWithRoll2 = {
        name: 'parsian',
        age:100,
        role:"manager"
    } ;

    type rollnumber = number; 
    
    // function r array er khetre type alias use vlo. r object er jonno interface vlo
    //array declare using interface.array-> object. function-> object.
    type Roll = number[];
    // [index : number ] index hbe number type er.
    //[index : number ] : number mane index e value thakbe number type er.
    interface Roll2 {
        [index : number ] : number
    }
    const rollNumber : Roll = [1,2,3];

    //declare function using interface
    type Add1 = (num1:number, num2:number) => number;

    interface Add2 {
        (num1:number, num2:number) : number
    }
     const add : Add2  = (num1, num2) => num1+num2;

}