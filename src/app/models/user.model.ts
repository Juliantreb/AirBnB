import { stringify } from '@angular/core/src/util';

export class User {
    public name: string;
    public id: number;
    public livesin: string;
    public joinedin: string;
    public email: string;
    public profilephoto: string;
    private age: number;
    public password: string;
    public today: string;
    public facebook: string;
    public phonenumber: string;
   

    constructor() {
        this.name="";
        this.id= -1;
        this.livesin="";
        this.joinedin="";
        this.email="";
        this.password="";
        this.profilephoto="";
        this.facebook="";
        this.profilephoto="";
        this.today="";
        

       

    }

    public setname(name: string) {
        this.name = name;
    }
    public setId(id: number) {
        this.id = id;
    }
    public getLivesIn(){
        return this.livesin
    }
    public getJoinedIn(){
        return this.joinedin
    }
    public setEmail(email: string) {
        this.email=email;
    }
    public setPassword(password:string) {
        this.password= password;
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
