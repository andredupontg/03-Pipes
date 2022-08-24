import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  totalChar: number = 0;
  encoded: string = "";

  transform(value: string, activate: boolean): string {
    this.totalChar = value.length;
    if (activate){
      for (let i = 0; i < this.totalChar - 1; i++){
        if (this.encoded === ""){
          this.encoded = "*";
        } else {
          this.encoded = this.encoded + "*";
        }
      }
      return this.encoded;
    } else {
      this.encoded = "";
      return value;
    }
  }
}
