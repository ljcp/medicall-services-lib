import { NgModule } from '@angular/core';


export {
    LoginService
} from './services/login.service'

@NgModule({
    providers:[LoginService]
})
export class ServiceModule {

}