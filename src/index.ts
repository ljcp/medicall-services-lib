export {
    LoginService
} from './services/login.service'

@NgModule({
    providers:[LoginService]
})
export class ServiceModule {
    constructor(@Optional() @SkipSelf() parentModule: AuthModule) {
        if (parentModule) {
            throw new Error(
                'ServiceModule is already loaded. Import it in the AppModule only');
        }
    }

    static forRoot(config: AuthConfig): ModuleWithProviders {
        return {
            ngModule: AuthModule,
            providers: [
                LoginService
            ]
        };
    }
}