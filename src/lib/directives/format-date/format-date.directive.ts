import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[ngxFormatDate]'
})
export class FormatDateDirective {

  /**
   * isUpdated - check if input is udpated or not
   */
  isUpdated = false;

  constructor(private control: NgControl) { }

  @HostListener('input', ['$event']) formatDate(event: KeyboardEvent) {
    const eventValue = (event.target as HTMLInputElement).value;
    const value = parseInt(eventValue, 10);
    if (!eventValue) {
      this.isUpdated = false;
      return;
    }
    if (!this.isUpdated && value >= 10 && value <= 12) {
      this.control.control.setValue(`${value} / `);
      this.isUpdated = true;
    } else if (!this.isUpdated && value >= 2 && value <= 9) {
      this.control.control.setValue(`0${value} / `);
      this.isUpdated = true;
    } else if (
      !this.isUpdated &&
      eventValue.length === 2 && (value < 12 && value > 0)) {
      this.control.control.setValue(`${eventValue} / `);
      this.isUpdated = true;
    } else {
      this.control.control.setValue(eventValue);
    }
  }

}
