import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidationRuleService {
  constructor() {}
}

export function emailValidator(control: FormControl) {
  return isEmail(control.value) ? null : { email: true };
}
export function isEmail(value: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(value);
}
