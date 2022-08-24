import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: "capitalized"
})

export class CapitalizedPipe implements PipeTransform {
  transform(value: string, all: boolean = true): string {
    value = value.toLowerCase();
    let names = value.split(" ");
    if (all){
      names = names.map((name: string) => {
        return name[0].toUpperCase() + name.substring(1);
      });
    } else {
      names[0] = names[0][0].toLowerCase() + names[0].substring(1);
    }
    return names.join(" ");
  }
}
