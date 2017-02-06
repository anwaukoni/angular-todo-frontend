export class Task{
  public showBox : boolean;
  public id: string;
 
  constructor(public title: string){
    this.title = title;
    this.showBox = false;
  }

}
