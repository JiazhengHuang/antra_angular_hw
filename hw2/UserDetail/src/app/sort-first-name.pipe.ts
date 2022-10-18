import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user';

@Pipe({
  name: 'sortFirstName',
})
export class SortFirstNamePipe implements PipeTransform {
  transform(users: User[], checked: boolean): User[] {
    if (!checked) {
      return users.sort((a, b) => (a.firstName > b.firstName ? 1 : -1));
    } else {
      return users.sort((a, b) => (a.firstName < b.firstName ? 1 : -1));
    }
  }
}
