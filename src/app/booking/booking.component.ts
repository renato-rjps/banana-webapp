import { Component, OnInit } from '@angular/core';
import { BookingDataService, Booking } from './booking-data.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  dataSource: any[];

  constructor(private bookingDataService: BookingDataService) {
  }

  ngOnInit(): void {
    this.getAllBookings();
  }

  delete(booking: any) {
    this.bookingDataService.fireRequest(booking, 'DELETE')
      .subscribe(() => {
        this.dataSource =
          this.dataSource.filter(x => x.id !== booking.id);
      });
  }

  getAllBookings() {
    this.bookingDataService.getAll<Booking[]>()
      .subscribe((result: any) => {
        console.log(result);
        this.dataSource = result.body._embedded.bookings;
      });
  }

}
