import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'formatDate',
    pure: true
})
export class FormatDate implements PipeTransform {
    constructor() { }
    transform(date: any): any {
        if (!date)
            return '';

        return date.year + "-" + date.month + "-" + date.day;
    }
}