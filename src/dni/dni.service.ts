import { Injectable } from '@nestjs/common';

@Injectable()
export class DniService {
  private letters = 'TRWAGMYFPDXBNJZSQVHLCKE';

  isValid(dni: string): boolean {
    const dniRegex = /^\d{8}[A-Z]$/;
    if (!dniRegex.test(dni)) {
      return false;
    }

    const numberPart = parseInt(dni.slice(0, 8), 10);
    const letterPart = dni.charAt(8);
    const expectedLetter = this.letters.charAt(numberPart % 23);

    return letterPart === expectedLetter;
  }
}
