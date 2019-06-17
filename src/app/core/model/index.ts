
export class Booking {
  private startDate: Date;
  private endDate: Date;
  private responsible: string;
  private room: any;
  private coffee: boolean;
  private amountOfPeople: number;
  private description: string;
  links: any;

  constructor(booking?: any) {
    booking = booking ? booking : {};

    this.startDate = booking.startDate || '';
    this.endDate = booking.endDate || '';
    this.responsible = booking.responsible || '';
    this.room = booking.room || '';
    this.coffee = booking.coffee || '';
    this.amountOfPeople = booking.amountOfPeople || '';
    this.description = booking.description || '';
    this.links = booking.links || '';
  }
}


