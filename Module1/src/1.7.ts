{
    //spread operator
    const bros1: string[] =['Mir','firoz','Mizan'];
    const bros2: string[] = ['Tonmoy','Nahid','Rahat'];
    bros1.push(...bros2);

    const mentors ={
        typescrip:'Mezba',
        redux:'Mir',
        dbms:'Mizan'
    }

    const mentors2 ={
        prisma:'Firoz',
        next:'Tonmoy',
        cloud:'Nahid'
    }
    const mentorList ={
        ...mentors,
        ...mentors2
    }


    //rest operator
    //friends akta array tai joto issa parameter  deya jabe
    const greetFriends =(...friends : string[]) =>{
        friends.forEach((friend : string) => console.log(`Hi ${friend}`))
    }
    greetFriends("Abul","Kabul","babul","ubul");
    
}