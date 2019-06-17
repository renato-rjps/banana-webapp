import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LocalDataService } from 'src/app/core/local-data.service';
import { BookingDataService } from 'src/app/core/booking-data.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent implements OnInit {

  locals: any = [];
  rooms: any = [];


  bookingForm: FormGroup;


  constructor(
    private route: Router,
    private messageService: MessageService,
    private localDataService: LocalDataService,
    private bookingDataService: BookingDataService,
    private formBuilder: FormBuilder) {
    this.bookingForm = this.formBuilder.group({
      responsible: '',
      endDate: '',
      startDate: '',
      coffee: '',
      amountOfPeople: '',
      description: '',
      local: '',
      room: ''
    });
  }

  ngOnInit() {
    this.localDataService.getAll<any>('/locals').subscribe(result => {
      this.locals = result.body._embedded.locals;
    });
  }

  onSubmit() {
    const form = this.bookingForm.getRawValue();
    this.bookingDataService.fireRequest(form, 'POST').subscribe(
      (response) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Reserva Cadastrada!',
          detail: 'A sua reserva foi cadastrada no sistema com sucesso!'
        });
        this.route.navigate(['booking']);
        this.bookingForm.reset();
      },
      (error) => {
        console.log(error);
        this.messageService.add({
          severity: 'error',
          summary: 'Erro!',
          detail: error.error.message
        });
      });
  }

  onChangeLocal(event: any) {
    if (!event.value) {
      return;
    }

    this.localDataService.fetchRooms(event.value).subscribe(response => {
      this.rooms = response._embedded.rooms;
    });
  }

}
