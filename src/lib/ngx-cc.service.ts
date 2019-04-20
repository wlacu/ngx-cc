import { Injectable } from '@angular/core';

import creditCardType from 'credit-card-type';
import { CardConfig } from './ngx-cc.model';


@Injectable({
  providedIn: 'root'
})
export class NgxCcService {

  constructor() { }

  getCardType(cardNumber: number | string): CardConfig {
    return creditCardType(cardNumber)[0];
  }

  prettyCardNumber(cardNumber: string, cardType) {
    const card = creditCardType.getTypeInfo(cardType);

    if (card) {
      const offsets = [].concat(0, card.gaps, cardNumber.length);
      const components = [];

      for (let i = 0; offsets[i] < cardNumber.length; i++) {
        const start = offsets[i];
        const end = Math.min(offsets[i + 1], cardNumber.length);
        components.push(cardNumber.substring(start, end));
      }

      return components.join(' ');
    }

    return cardNumber;
  }
}
