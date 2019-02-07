import { Component, OnInit } from '@angular/core';
import { ListComponent  } from '../list/list.component';
import { ParkingList } from '../parking';
@Component({
  selector: 'app-spotlist',
  templateUrl: './spotlist.component.html',
  styleUrls: ['./spotlist.component.css']
})
export class SpotlistComponent implements OnInit {

  parkingList: ParkingList[];
  constructor( private list: ListComponent) { }

  ngOnInit() {

  }


}
