{
    //Reference Type --> Object

const user :{
    readonly company:'programming hero';//required // kono value type hisebe kaj kore etake bole literal type. programming hero sara kisu r define kora jabe na 
    firstname: string;//required
    middleName?: string;//required //Optional Type mane thakle string hbe r na thakle undefined hbe
    lastName: string;//required
    isMarried: boolean;
} ={
    company:"programming hero",
    firstname:'Mezbaul',
    lastName:'Persian',
    isMarried: true
}

//file export kore onno file e property change korte chaile objectname. dilei sob property er nam chole asbe eta ts er advantage
//readonly thakle valu change korte pabe na
//literal type holeo value change korte parbe na
user.firstname = 'bv';
}