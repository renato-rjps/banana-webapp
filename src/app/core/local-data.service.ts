import { Injectable } from '@angular/core';
import { HttpBaseService } from 'src/app/core/http-base.service';
import { Booking } from './model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LocalDataService extends HttpBaseService {

  fetchRooms(local: any): Observable<any> {
    return this.fetch(`${local._links.self.href}/rooms`);
  }

  fireRequest(form: any, method: string) {
    return null;
  }
}
