import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 num1:number=0;
 num2:number=0;
 num3:number=0;


 onCalculate(btnName:string){
   if(btnName == "ADD"){
     this.num3= this.forAdd();
   }
   else if(btnName === "SUB"){
    this.num3= this.forSUB();
   }
   else if(btnName == "MUL"){
    this.num3= this.forMUL();
   }
   else{
    this.num3= this.forDIV();
   }

 }

   forAdd(){
      let c= this.num1+this.num2;
      return c;
   }
   forSUB(){
    let c= this.num1-this.num2;
    return c;
 }
 forMUL(){
  let c= this.num1*this.num2;
  return c;
}
forDIV(){
  let c= this.num1/this.num2;
  return c;
}

  // onAdd(){
  //  let a= this.num1;
  //  let b= this.num2;
  //   this.num3=a+b;
  //  return this.num3;
    
  // }

  // onSub(){
  //   let a= this.num1;
  //   let b= this.num2;
  //    this.num3=a-b;
  //   return this.num3;
     
  //  }

  //  onMul(){
  //   let a= this.num1;
  //   let b= this.num2;
  //    this.num3=a*b;
  //   return this.num3;
     
  //  }

  //  onDiv(){
  //   let a= this.num1;
  //   let b= this.num2;
  //    this.num3=a/b;
  //   return this.num3;
     
  //  }

  ngOnInit(){
    console.log("This is the new result:Result");
    console.log("this is the new change in new branch");
  }

  getResult(){
    return this.num3;
  }

  
}