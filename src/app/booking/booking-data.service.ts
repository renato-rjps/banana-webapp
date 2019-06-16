import { Injectable } from '@angular/core';
import { HttpBaseService } from '../core/http-base.service';


@Injectable({
  providedIn: 'root'
})
export class BookingDataService extends HttpBaseService {

  fireRequest(booking: Booking, method: string) {
    const links = booking.links
      ? booking.links.find(x => x.method === method)
      : null;

    switch (method) {
      case 'DELETE': {
        return super.delete(links.href);
      }
      case 'POST': {
        return super.add<Booking>(booking);
      }
      case 'PUT': {
        return super.update<Booking>(links.href, booking);
      }
      default: {
        console.log(`${links.method} not found!!!`);
        break;
      }
    }
  }
}

export interface Booking {
  links: any;
}
