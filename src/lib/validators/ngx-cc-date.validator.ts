import { FormControl } from '@angular/forms';
import validator from 'card-validator';

export const CardExpirationValidator = (control: FormControl) => {
    const date = validator.expirationDate(control.value);
    return (date.month && date.year) ? null : { invalidDate: true };
};
