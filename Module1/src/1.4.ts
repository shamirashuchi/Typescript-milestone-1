{
    //Basic Data Type

//string

//implicit means ts compiler data dekhe datatype assume kore nibe
let a = "lala";

//explicit means string bole dissi
let firstName : string = "mezba";

//number
let roll: number =123;

//boolean
let isAdmin : boolean = true;

//undefined
let x : undefined = undefined;

//null
let y:null = null;


//compiler any type vabe nibe
let d;

//any type use kora jay but ts er kaj nai js banano vaba jay
d = 123;
d = 'ddd';
d = true;


//declare korle sudhu number type i nibe
let c : number;
c = 123;


//Array
let friends : string[] = ['rachel','Monica'];
friends.push('dd');

let eligibleList : number[] = [1,3,2];

//tuple ke bishesh type array. type of values kon order e thakbe define kora jay
//joray ba 3 ba 4 tay thakte pare
let coordinets : [number,number] = [1,5];
let ageName :[number,string,boolean] = [50, 'Mr.x',true];
ageName[0] = 67;
}