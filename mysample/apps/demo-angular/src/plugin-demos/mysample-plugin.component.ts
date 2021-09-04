import { Component, NgZone } from '@angular/core';
import { DemoSharedMysamplePlugin } from '@demo/shared';
import { } from '@mysample/mysample-plugin';

@Component({
	selector: 'demo-mysample-plugin',
	templateUrl: 'mysample-plugin.component.html',
})
export class MysamplePluginComponent {
  
  demoShared: DemoSharedMysamplePlugin;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedMysamplePlugin();
  }

}