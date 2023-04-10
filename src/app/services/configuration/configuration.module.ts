import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ConfigurationModule {
  public static forRoot(
    config: any,
  ): ModuleWithProviders<ConfigurationModule> {
    return {
      ngModule: ConfigurationModule,
      providers: [
        { provide: 'CONFIGURATION_MODULE', useValue: config },
      ],
    };
  }
}
