export class User {
    public firstname: string;
    public lastname: string;
    public livesin: string;
    public joinedin: string;
   
    private age: number;

    constructor() {
        this.firstname="";
        this.lastname="";
        this.livesin="";
        this.joinedin="";
       

    }

    public setFirstname(firstname: string) {
        this.firstname= firstname;
    }
    public getLivesIn(){
        return this.livesin
    }
    public getJoinedIn(){
        return this.joinedin
    }
   


    public setDateofBirth(dob: Date) {
        // Calculate the age
        this.age=55
    }
    public getAge() {
        return this.age;
    }
    // public setFullname(name:string) {

    // }
}