import { Injectable } from '@angular/core';
import { HttpBaseService } from 'src/app/core/http-base.service';
import * as moment from 'moment';


@Injectable({
  providedIn: 'root'
})
export class BookingDataService extends HttpBaseService {

  fireRequest(booking: any, method: string) {
    switch (method) {
      case 'DELETE': {
        return super.delete(booking._links.self.href);
      }
      case 'POST': {
        booking.room = `/rooms/${booking.room.id}`;
        booking.startDate = moment(booking.startDate).format('YYYY-MM-DD HH:mm');
        booking.endDate = moment(booking.endDate).format('YYYY-MM-DD HH:mm');
        return super.add<any>('/bookings', booking);
      }
      /*
      case 'PUT': {
        return super.update<Booking>(links.href, booking);
      }
      */
      default: {
        break;
      }
    }
  }
}
