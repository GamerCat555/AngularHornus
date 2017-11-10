/**
 *
    The password's first character must be a letter, 
    it must contain at least 4 characters and no more than 15 characters 
    and no characters other than letters, numbers and the underscore may be used
 */
import { FormControl } from '@angular/forms';
export function passwordValidator(control: FormControl): {[s: string]: boolean} {
    if ( !control.value.match(/^[a-zA-Z]\w{3,14}$/)) {
        return { invalidPassword : true };
    }
}
