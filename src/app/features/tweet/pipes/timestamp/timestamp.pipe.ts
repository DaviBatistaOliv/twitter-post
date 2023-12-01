import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timestamp',
})
export class TimestampPipe implements PipeTransform {
  transform(value: Date, ...args: unknown[]): string {
    const input_date = new Date(value);
    const now = new Date();

    const diff = Math.floor(((now as any) - (input_date as any)) / 1000);

    if (diff <= 1 || diff < 60) {
      return diff + 's';
    }

    if (diff <= 60 || diff < 5400) {
      return Math.round(diff / 60) + 'm';
    }

    if (diff <= 5400 || diff < 86400) {
      return Math.round(diff / 3600) + 'h';
    }

    if (diff <= 129600 || diff < 604800) {
      return Math.round(diff / 86400) + 'd';
    }

    if (diff <= 777600) {
      return 'm';
    }

    return input_date.toISOString();
  }
}
