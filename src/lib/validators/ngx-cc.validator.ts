import { FormControl } from '@angular/forms';
import validator from 'card-validator';

export const CardValidator = (control: FormControl) => {
    return validator.number(control.value).isValid ? null : { invalidCardNumber: true };
};
