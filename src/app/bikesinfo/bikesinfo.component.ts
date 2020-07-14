
import 'rxjs/add/operator/switchMap';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Bike } from '../bike';
import { BikeService } from '../bike.service';
 
 
@Component({
  selector: 'bikes-info',
  templateUrl: './bikesinfo.component.html',
  styleUrls: ['./bikesinfo.component.sass']
})
export class BikesInfoComponent implements OnInit {
 
  bike: Bike;
 
  constructor(
    private bikeService: BikeService,
    private route: ActivatedRoute
  ) { }
 
  ngOnInit(): void {
    this.route.params.switchMap((params: Params) => this.bikeService.getBike(+params['id']))
      .subscribe(bike => this.bike = bike);
  }

}
