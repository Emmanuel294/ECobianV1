import { Injectable, Inject, Optional } from '@angular/core';
import { ConfigurationModuleConfig } from './configuration.module.config';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService implements ConfigurationModuleConfig {

  public profilePicture: string = '';
  public resume: string = '';

  constructor(
    @Optional()
    @Inject('CONFIGURATION_MODULE')
    private readonly config: ConfigurationModuleConfig | null,
  ) {
    if (this.config) {
      this.profilePicture = this.config.profilePicture;
      this.resume = this.config.resume;
    }
  }
}
