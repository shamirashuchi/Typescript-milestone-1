{
    //nullable types

    const searchName = (value:string | null) =>{
        if(value){
            console.log('searching');
        }
        else{
            console.log("There is nothing to search")
        }
    };
    searchName('parsian');
    searchName(null);

    //unknown type
    const getspeedinmeterpersecond = (value:unknown) =>{
        if(typeof value === 'number'){
            const convertedspeed = (value * 1000) / 3600;
            console.log(`The speed is ${convertedspeed} ms^-1`)
        }
        else if(typeof value === 'string'){
            const [result,unit] = (value.split(" "));
            console.log(result);
            const convertedspeed = (parseFloat(result) * 1000) / 3600;
            console.log(`The speed is ${convertedspeed} ms^-1`)
        }
        else{
            console.log('Wrong input');
        }
    };
    getspeedinmeterpersecond(`1000 kmh^-1`);

    //nevertype never return anything . only give error

    const  throwError =(msg:string) :never =>{
        throw new Error(msg);
    }
    throwError('muskil se error ho geya')
}