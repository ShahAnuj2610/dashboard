import React from 'react';
import { appbaseService } from './service/AppbaseService';
import * as QuickLinks from './shared/QuickLinks';

export const contextConfig = {
	"appbase": {
		"name": "appbase",
		"logo": "../../../assets/images/appbase/logo.png",
		"logoText": null,
		"cardIcon": "fa-database",
		"appDashboard": ["dashboard", "browser", "gem", "mirage", "credentials", "team"],
		"document": "https://docs.appbase.io",
		"tutorial": {
			url: "../../../app/views/tutorial/appbase-tutorial/index.html",
			title: "Appbase Dashboard",
			description: "Try appbase dashboard over here"
		},
		"primary": "#3BC7F6",
		"accent": "#CDDC39",
		"quickLinks": QuickLinks.AppbaseQuickLinks()
	},
	"reactivemaps": {
		"name": "reactivemaps",
		"logo": "../../../assets/images/logo.png",
		"logoText": "Reactive Maps",
		"cardIcon": "fa-globe",
		"appDashboard": ["dashboard", "browser", "credentials", "team"],
		"document": "https://docs.appbase.io",
		"tutorial": {
			url: "../../../app/views/tutorial/reactive-maps-onboarding/index.html",
			title: "Appbase Dashboard",
			description: "Try appbase dashboard over here"
		},
		"primary": "#5678FC",
		"accent": "#CDDC39",
		"quickLinks": QuickLinks.ReactiveMapsQuickLinks()
	}
}

export const getConfig = () => {
	let context = appbaseService.context.split('/');
	context = context[1] && Object.keys(contextConfig).indexOf(context[1]) > -1 ? context[1] : "appbase";
	return contextConfig[context];
}