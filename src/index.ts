import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

export * from './services/login.service';

@NgModule({
    imports: [HttpModule]
})
export class ServiceModule {

}