import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'default'
})
export class DefaultPipe implements PipeTransform {

    transform(value: string, fallback: string, forceHttps: boolean = false): string {
        let i = "";
        if (value) {
            i = value;
        } else {
            i = fallback;
        }
        if (forceHttps) {
            if (i.indexOf("https") == -1) {
                i = i.replace("http", "https");
            }
        }
        return i;
    }
}