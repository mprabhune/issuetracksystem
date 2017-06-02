import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(issues: any, term: any): any {
    if(term === undefined) return issues;
    return issues.filter(function(issue){
    return issue.description.toLowerCase().includes(term.toLowerCase());
    })
  }

}
