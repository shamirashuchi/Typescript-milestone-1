{
    //union  types or or type
    // type FrontendDevloper = 'fakibazDevloper' | 'juniorDevloper';
    // type FullstackDevloper = 'frontendDevloper' | 'expertDevloper';
    // type Developer = FrontendDevloper | FullstackDevloper;
    // const newDevloper : FrontendDevloper = 'juniorDevloper';

    // type User ={
    //     name:string;
    //     email?:string;
    //     gender:"male" | "female";
    //     bloodGroup: "0+"|"A+"|"AB+"
    // }

    // const user1: User ={
    //     name:"persian",
    //     gender:"male",
    //     bloodGroup:'0+'
    // }



    //intersection type or and type
type FrontendDeveloper = {
    skills: string[];
    designation1:"Frontend Developer"
}

type BackendDeveloper = {
    skills: string[];
    designation2:"Backend Developer"
}

type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

const fullstackDevloper : FullstackDeveloper ={
    skills: ['HTML','CSS','EXPRESS'],
    designation1 : 'Frontend Developer',
    designation2 :  'Backend Developer'
}

}