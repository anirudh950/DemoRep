function Sum(a,b){
    /*let x=a
    let y=b
    console.log(x+y);*/
    let x=a;
    let y=b;

   this.x=a;
   this.y=b;
    this.getSum=function(){
        console.log("sum of a+b=", this.x + this.y);
    };
}
let someobj1= new Sum(10,10);
let someobj2= new Sum(13,20);

sumobj1.getSum();


let a={np=1};
let b={...a};
console.log(b);