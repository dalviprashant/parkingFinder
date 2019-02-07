import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  vehicle1 = {
    number : 'MH-12 KJ 1234',
    type : '2 wheeler'
  }
  vehicle2 = {
    number : 'MH-16 SN 8954',
    type : '4 wheeler'
  }
  vehicle3 = {
    number : 'MH-9 AJ 5862',
    type : '2 wheeler'
  }
  vehicle4 = {
    number : 'MH-22 NS 1904',
    type : '4 wheeler'
  }
  vehicle5 = {
    number : 'MH-19 KK 7536',
    type : '2 wheeler'
  }
  vehicle6 = {
    number : 'MH-21 AS 8941',
    type : '4 wheeler'
  }

  id : string;

  spot = {
    _id : '87654',
    name : 'Ganesh Parking Spot',
    address : 'Trimurti chowk, Katraj',
    rate_per_hour_2 : '100',
    rate_per_hour_4 : '200',
    avl_2 : '24',
    avl_4 : '12',
    cust_id : '123',
    veh_type : '2 wheeler',
    veh_number : '1234',
    time : '"current time"'
  }
  vehicles = {
    array1 : [this.vehicle1,this.vehicle3,this.vehicle5],
    array2 : [this.vehicle2,this.vehicle4,this.vehicle6]
  }
}
