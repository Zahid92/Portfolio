export class Certificate {
    static COUNT: number = 0
    Name!: string
    status!: number
    Link!: string
    Description: string = ""
    img: string = "..\\assets\\employeeIcon.jpg"
    
    constructor(name:string, link:string, status:number) {
        Certificate.COUNT += 1;
        this.Name = name;
        this.Link = link;
        this.status = status;
    }

}