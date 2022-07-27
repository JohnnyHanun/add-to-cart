import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
//pipes helps us to transform data before displaying them to the view
  transform(value : any[],filterString: string, propName : string) : any[]  {
    const result: any = [];
    if(!value || filterString==='' || propName === '') {return value;}
    value.forEach((a:any)=>{
      if(a[propName].trim().toLowerCase().includes(filterString.toLowerCase()))
      {
        result.push(a);
      }
    });
    return result;
  }

}
