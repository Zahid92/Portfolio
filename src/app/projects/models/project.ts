export class Project {
    static COUNT: number = 0
    Name: string
    Id!: number
    Link: string
    Description: string = ""
    Contributors!: string
    Type!: string|"solo"|"group"|"opensource"                  
    Img: string = "..\\assets\\employeeIcon.jpg"
    
    constructor(id:number, name:string, link:string, img:string, description:string, type:string, contributors:string) {
        Project.COUNT += 1;
        this.Name = name;
        this.Link = link ?? "Link not available";
        this.Id = id;
        this.Img = img;
        this.Description = description;
        this.Type = type;
        this.Contributors = contributors;
    }

}