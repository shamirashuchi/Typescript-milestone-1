{
    //Through generic type dynamically reusable type can be created
    //generic type


//   type GenericArray = Array<number>;
  type GenericArray<T> = Array<T>;

    //const rollNumber : number[] =[3,6,8];
    // const rollNumber :  GenericArray =[3,6,8];
    const rollNumber :  GenericArray<number> =[3,6,8];
    // const mentors : string[] =['Mr.X','Mr.Y','Mr.Z'];
    const mentors : GenericArray<string> =['Mr.X','Mr.Y','Mr.Z'];
    // const boolArray : boolean[] = [true,false,true];
    const boolArray : GenericArray<boolean> = [true,false,true];
     
type User = {
    name:string; 
    age:number
}


    const user : GenericArray<User>= [
        {
            name:'Mezbah',
            age:100
        },
        {
            name:'Jhanker Mahbub',
            age:110
        },
    ]
    const add = (x:number, y:number) =>x+y;
    add(30,20);

    //generic tuple
    type GenericTuple<x,y> = [x,y];
    // const Manush : [string,string] = ['Mr.X','Mr.y'];
    const Manush : GenericTuple<string,string> = ['Mr.X','Mr.y'];
    const UserWithId : GenericTuple<number,{name:string,email:string}> = [1234,{name:'Persian', email:'A@gmail.com'}];

}