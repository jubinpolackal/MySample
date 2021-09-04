import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedMysamplePlugin } from '@demo/shared';
import { } from '@mysample/mysample-plugin';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedMysamplePlugin {
	
}
