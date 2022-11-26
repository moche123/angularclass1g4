import { Component, OnInit, Input, Output, OnChanges, SimpleChanges, AfterViewInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss']
})
export class ChildrenComponent implements OnInit,OnChanges,AfterViewInit {

  @Input() numberOfParent = 0;
  @Output() getChildrenValue:any = new EventEmitter();
  public numberChildren:any = 28;

  constructor() {
    console.log('Hola soy el constructor')
   } //! PRIMERO

  ngOnChanges(changes: SimpleChanges): void { 
    //! POR PRIMERA VEZ DESPUES DEL CONSRUCTOR Y ANTES DEL ONINIT,
    //! Y LUEGO SE VA A EJECUTAR CADA VEZ QUE HAYAN CAMBIOS EN EL INPUT
    console.log('Hola soy el onchanges')
    // if(changes['numberOfParent'].currentValue == this.numberChildren){
    //   console.log('ABCD')
    //   this.devolverValorAlcanzado();
    // }

    

    
  }

  ngOnInit(): void {
    console.log('Hola soy el OnInit')
  }


  //!*TODO: SOLVE AFTER INIT ISSUE
  ngAfterViewInit(): void {
    console.log('Hola soy el AfterView Init')
 
  }


  devolverValorAlcanzado(){
    console.log('ABC')
    this.getChildrenValue.emit(this.numberChildren)
  }
 



}
