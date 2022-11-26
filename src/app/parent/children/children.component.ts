import { Component, OnInit, Input, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss']
})
export class ChildrenComponent implements OnInit,OnChanges,AfterViewInit {

  @Input() numberOfParent = 0

  constructor() {
    console.log('Hola soy el constructor')
   } //! PRIMERO

  ngOnChanges(changes: SimpleChanges): void { 
    //! POR PRIMERA VEZ DESPUES DEL CONSRUCTOR Y ANTES DEL ONINIT,
    //! Y LUEGO SE VA A EJECUTAR CADA VEZ QUE HAYAN CAMBIOS EN EL INPUT
    console.log('Hola soy el onchanges')
    console.log(changes)

    
  }

  ngOnInit(): void {
    console.log('Hola soy el OnInit')
  }


  ngAfterViewInit(): void {
    console.log('Hola soy el AfterView Init')
 
  }
 



}
