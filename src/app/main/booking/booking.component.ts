import { Component, OnInit } from '@angular/core';
import { BookingDataService } from 'src/app/core/booking-data.service';
import { Booking } from 'src/app/core/model';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { MessageService } from 'primeng/api';



@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  dataSource: any[];

  constructor(
    private bookingDataService: BookingDataService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {

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
    this.bookingDataService.getAll<Booking[]>('/bookings')
      .subscribe((result: any) => {
        this.dataSource = result.body._embedded.bookings;
      });
  }

  onDelete(booking) {
    this.confirm(booking);
  }

  confirm(booking) {
    this.confirmationService.confirm({
      message: 'Deseja realmente excluir essa reserva de sala?',
      accept: () => {
        this.bookingDataService.fireRequest(booking, 'DELETE').subscribe(
          (response) => {
            this.messageService.add({
              severity: 'success',
              summary: 'Reserva removida!',
              detail: 'A reserva foi removida do sistema com sucesso!'
            });
          },
          (error) => {
            this.messageService.add({
              severity: 'error',
              summary: 'Erro!',
              detail: 'Ocorreu um erro ao tentar remover a reserva selecionada!'
            });
          }
        );
      }
    });
  }

}
