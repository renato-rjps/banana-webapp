import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingComponent } from './main/booking/booking.component';
import { RoomComponent } from './main/room/room.component';
import { LocalComponent } from './main/local/local.component';
import { BookingFormComponent } from './main/booking/parts/booking-form/booking-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'booking', pathMatch: 'full' },
  { path: 'booking', component: BookingComponent },
  { path: 'booking-new', component: BookingFormComponent },
  { path: 'room', component: RoomComponent },
  { path: 'local', component: LocalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
