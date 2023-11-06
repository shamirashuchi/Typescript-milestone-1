{
    //function with generics

    const createArrayWithTuple = <T,Q> (param1 : T, param2 : Q) : [T,Q] =>{
        return[param1, param2];
    }

    const createArrayWithGeneric = <T>(param: T):T[]=>{
        return[param];
    }

    const res1 = createArrayWithTuple('Bangladesh',222);
    const resGeneric = createArrayWithGeneric<string>('Bangladesh');

    type User = {id: number; name : string};

    const resGenericObj = createArrayWithGeneric<User>({
        id:222, 
        name:"Mr. Pasan"
    })
}