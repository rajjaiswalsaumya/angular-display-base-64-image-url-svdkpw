import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "imagePipe"
})
export class ImagePipe implements PipeTransform {
  constructor() {}

  transform(value: any, arg: any) {
    if (value != null && arg != null) {
      return "<img src=`${arg}` alt=`${value}`/>";
    }
    return `${value}`;
  }
}
