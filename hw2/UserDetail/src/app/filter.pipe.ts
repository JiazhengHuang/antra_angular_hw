import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(users: User[], inputVal: string): User[] {
    if (inputVal === '') return users;
    return users.filter(
      (user) =>
        user.firstName.toLowerCase().indexOf(inputVal.toLowerCase()) !== -1
    );
  }
}
