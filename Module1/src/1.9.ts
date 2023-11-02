{
    //Type alias

    type student= {
        name: string;
        age:number;
        contactNo?:string;
        gender:string;
        address: string
    };
    const student1:student = {
        name: 'Mezbah',
        age:50,
        gender:'male',
        contactNo:'018726364',
        address:'ctg',
    };

    const student2: student ={
        name: "Mir",
        age: 40,
        gender:'male',
        address: "dhk"
      };


      type UserName = string//borohater hbe Username
      type IsAdmin = boolean
      const userName : UserName = "Persian"
      const isAdmin : IsAdmin = true

    type Add  = (num1: number , num2: number) => number
      const add:Add = (num1,num2) => num1 + num2;
}