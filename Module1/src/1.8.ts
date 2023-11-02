{
    //destructuring
    const user ={
        id:345,
        name:{
            firstname:'Mezbaul',
            middlename:'Abedin',
            lastname:'Persian'
        },
        contactNo:'01712345678',
        address: "Uganda"
    };
    const {contactNo,
        name: {middlename : midName},// name alias mane middlename er arekta nam dissi mid name. ekhane type deya jabe na
    } = user;

    //Array destructuring
    const  myFriends = ['chandler','joey','ross','rachel','monica'];
    //bestfriend er value hoye jabe ross
    // const [a,b,bestfriend] = myFriends;
    //dont want to use first variable
    //rest er moddhe rachel,monica, thakbe
    //const [,,bestfriend,...rest] myFriends;
}