import { Pipe, PipeTransform } from "@angular/core";


@Pipe({

    name: 'ucfirst',

})


export class UcfirstPipe implements PipeTransform

{

    transform(value: string|null): string|null {

        if(value && value.length > 0){

            return value[0].toUpperCase() + value.substring(1);

        } else {

            return value;

        }

    }

}
