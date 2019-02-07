import { Component, OnInit } from '@angular/core';
import { ParkingList } from '../parking';
import { DataService } from '../data.service';
import {ParkingSpot } from '../ParkingSpot';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  parkinglist: ParkingList[];
  citySelected: string;
  parkingSpotList: ParkingSpot[];
  constructor(private dataService: DataService) { }

  ngOnInit() {

      this.parkinglist = [
        {city: 'Pune' },
        {city: 'Mumbai'},
        {city: 'Nagar'},
        {city: 'Nashik'},
        {city: 'Nagpur'}
      ];
      this.citySelected = 'Pune';


  }

  public SearchCity(city) {
   console.log('City read' + city);
  this.dataService.getParkingList(city).subscribe(parkingSpots => {
    this.parkingSpotList = parkingSpots;
    console.log(this.parkingSpotList.length);
    // console.log(this.parkingSpotList);
    // return this.parkinglist;
   //  console.log('Parking List ' + items[0].ParkingName);
  });

  }



}
