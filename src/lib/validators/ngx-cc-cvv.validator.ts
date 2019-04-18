import { FormControl } from '@angular/forms';
import validator from 'card-validator';

export const CardCvvValidator = (control: FormControl) => {
    const cvv = validator.cvv(control.value);
    return (cvv.isValid) ? null : { invalidCvv: true };
};
