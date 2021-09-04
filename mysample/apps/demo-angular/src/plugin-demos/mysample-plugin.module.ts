import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { MysamplePluginComponent } from './mysample-plugin.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: MysamplePluginComponent }])],
  declarations: [MysamplePluginComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class MysamplePluginModule {}
