import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abcToNumber'
})
export class AbcToNumberPipe implements PipeTransform {

  transform(value: string): string {
    let letters: string[] = value.toLowerCase().split('');
    let newString: string = '';
    for(let letter of letters) {
      if(letter=='a') {
        newString += '01';
      } else if(letter=='b') {
        newString += '02';
      } else if(letter=='c') {
        newString += '03';
      } else if(letter=='d') {
        newString += '04';
      } else if(letter=='e') {
        newString += '05';
      } else if(letter=='f') {
        newString += '06';
      } else if(letter=='g') {
        newString += '07';
      } else if(letter=='h') {
        newString += '08';
      } else if(letter=='i') {
        newString += '09';
      } else if(letter=='j') {
        newString += '10';
      } else if(letter=='k') {
        newString += '11';
      } else if(letter=='l') {
        newString += '12';
      } else if(letter=='m') {
        newString += '13';
      } else if(letter=='n') {
        newString += '14';
      } else if(letter=='ñ') {
        newString += '15';
      } else if(letter=='o') {
        newString += '16';
      } else if(letter=='p') {
        newString += '17';
      } else if(letter=='q') {
        newString += '18';
      } else if(letter=='r') {
        newString += '19';
      } else if(letter=='s') {
        newString += '20';
      } else if(letter=='t') {
        newString += '21';
      } else if(letter=='u') {
        newString += '22';
      } else if(letter=='v') {
        newString += '23';
      } else if(letter=='w') {
        newString += '24';
      } else if(letter=='x') {
        newString += '25';
      } else if(letter=='y') {
        newString += '26';
      } else if(letter=='z') {
        newString += '27';
      } else {
        newString += letter;
      }
    }

    return newString;
  }

}
