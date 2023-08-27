import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showMoreLess',
})
export class ShowPipe implements PipeTransform {
  maxLenght = 600;
  showMore = false;

  transform(value: string, isShowMore: boolean): string {
    this.showMore = isShowMore;
    return this.showMore ? value : `${value.slice(0, this.maxLenght)}...`;
  }
}
