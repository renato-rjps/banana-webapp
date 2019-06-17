import { Injectable } from '@angular/core';
import { HttpBaseService } from 'src/app/core/http-base.service';
import { Booking } from './model';


@Injectable({
  providedIn: 'root'
})
export class RoomDataService extends HttpBaseService {

  fireRequest(booking: Booking, method: string) {
    return null;
  }
}
