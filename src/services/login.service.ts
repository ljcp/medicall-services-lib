import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
    doLogin(): String {
        const mock = 'logged';
        return mock;
    }
}