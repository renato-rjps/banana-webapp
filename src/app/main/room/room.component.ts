import { Component, OnInit } from '@angular/core';
import { RoomDataService } from 'src/app/core/room-data.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  dataSource: any[];
  constructor(private roomDataService: RoomDataService) { }

  ngOnInit() {
    this.getAllRooms();
  }

  getAllRooms() {
    this.roomDataService.getAll<any[]>('/rooms')
      .subscribe((result: any) => {
        this.dataSource = result.body._embedded.rooms;
      });
  }
}
