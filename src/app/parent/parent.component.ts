import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  public numberOfParent = 15;
  public childrenNumber = 0

  constructor() { }

  ngOnInit(): void {
  }

  changeParentNumber(){
    this.numberOfParent++
  }

  receiveChildrenValue(numberReceived:any){
     this.childrenNumber = numberReceived
  }

}
