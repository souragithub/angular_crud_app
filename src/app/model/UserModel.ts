export class UserModel{
    userId : number;
    name : string;
    city : string;
    address : string;
    email : string;
    pin: string;

    constructor() {
        this.userId = 1;
        this.name = '';
        this.address = '';
        this.email = '';
        this.city= '';
        this.pin = '';
    }
}