import {NgModule} from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser";
import {MatIconRegistry} from '@angular/material/icon';
@NgModule()
export class IconsModule {
  constructor(
    private _domsanitizer: DomSanitizer,
    private _matIconRegistry : MatIconRegistry) {

    this._matIconRegistry.addSvgIcon("Json", this._domsanitizer.bypassSecurityTrustResourceUrl('assets/icons/json.svg'))
    this._matIconRegistry.addSvgIcon("Txt", this._domsanitizer.bypassSecurityTrustResourceUrl('assets/icons/txt.svg'))
    this._matIconRegistry.addSvgIcon("Personne", this._domsanitizer.bypassSecurityTrustResourceUrl('assets/icons/personne.svg'))
    this._matIconRegistry.addSvgIcon("Server", this._domsanitizer.bypassSecurityTrustResourceUrl('assets/icons/server.svg'))
    this._matIconRegistry.addSvgIcon("Terminal", this._domsanitizer.bypassSecurityTrustResourceUrl('assets/icons/terminal.svg'))
    this._matIconRegistry.addSvgIcon("Logo", this._domsanitizer.bypassSecurityTrustResourceUrl('assets/icons/logo10.svg'))
  }

}
