import { Component } from '@angular/core';

@Component({
  selector: 'flat-list',
  templateUrl: './flatlist.component.html',
  styleUrls: ['./flatlist.component.css']
})
export class FlatlistComponent {

  flats:any[]=[{
    number: 'F101',
    address: 'Bihar',
    name: 'Flat1'
  }]
}
