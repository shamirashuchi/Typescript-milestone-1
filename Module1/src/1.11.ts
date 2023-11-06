{
    //ternary operator
   
    const age : number =15;
    
    const isAdult = age >= 18 ? 'adult' : 'not adult';
    //see output as a object { isAdult: 'not adult' }
    console.log({isAdult});
    
    //nullish coalescing operator only work null or undefined happen
    const  isAuthenticated = null ;
    const result1 = isAuthenticated ?? 'Guest';
    console.log({result1});

    const  isAuthenticateded = "" ;
    const result2 = isAuthenticateded ?? 'Guest';
    const result3 = isAuthenticateded ? isAuthenticateded : 'Guest';
    console.log({result2});
    console.log({result3});

     //optional chaining
    type User = {
        name : string;
        address:{
            city:string;
            road:string;
            presentaddress: string;
            permanentaddress?:string
        }
    }

    const user : User = {
        name : 'Persian',
        address:{
            city:'ctg',
            road:'Awesome Road',
            presentaddress:'ctg town'
        }
    }

    const permanentAddress = user?.address?.permanentaddress ?? 'No permanent address';
    console.log({permanentAddress});
}