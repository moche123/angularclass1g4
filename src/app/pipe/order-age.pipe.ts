import { OnChanges, Pipe, PipeTransform, SimpleChanges } from '@angular/core';

@Pipe({
  name: 'orderAge',
  pure: false
})
//! UNDEFINED = EXISTE PERO AUN NO TIENE VALOR, NULL ES UN VALOR 
export class OrderAgePipe implements PipeTransform {
  constructor(){
    console.log('CONSTRUCTOR PIPE')
  }



  transform(value: any, args?: any[]): any {
   // console.log(value)
   console.log('ORDERING')
    let orderedPeople =  value.sort( (a:any,b:any) => a.edad-b.edad )
    return orderedPeople
  }

}
