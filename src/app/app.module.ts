import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SystelabComponentsModule } from 'systelab-components';
import { SystelabTranslateModule } from 'systelab-translate';
import { SystelabPreferencesModule } from 'systelab-preferences';
import { BASE_PATH } from './common/variables';
import { environment } from '../environments/environment';
import { ApiModule } from './common/api.module';
import { GlobalsModule } from './globals/globals.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app.routing';
import { LoginGuard } from './login/login.guard';
import { PatientGrid } from './main/patient-maintenance/patient-grid.component';
import { MessagePopupService } from 'systelab-components/widgets/modal/message-popup/message-popup.service';
import { DialogService } from 'systelab-components/widgets/modal/dialog/dialog.service';
import { PatientMaintenanceDialog } from './main/patient-maintenance/patient-maintenance-dialog.component';
import { PatientDialog } from './main/patient-maintenance/patient-details-dialog/patient-dialog.component';
import { SystelabLoginModule } from 'systelab-login';
import { LoginComponent } from './login/login.component';
import { EmptyBodyInterceptor } from './common/api/empty-body.interceptor';

@NgModule({

	imports:         [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		SystelabTranslateModule.forRoot(),
		SystelabPreferencesModule.forRoot(),
		SystelabComponentsModule.forRoot(),
		SystelabLoginModule.forRoot(),
		ApiModule.forRoot(),
		GlobalsModule.forRoot(),
		AppRoutingModule
	],
	declarations:    [
		AppComponent,
		PatientDialog,
		PatientMaintenanceDialog,
		PatientGrid,
		MainComponent,
		PageNotFoundComponent,
		LoginComponent
	],
	providers:       [
		{provide: BASE_PATH, useValue: environment.API_BASE_PATH},
		{provide: HTTP_INTERCEPTORS, useClass: EmptyBodyInterceptor, multi: true},
		LoginGuard,
		MessagePopupService,
		DialogService
	],
	entryComponents: [
		PatientDialog,
		PatientMaintenanceDialog
	],
	bootstrap:       [AppComponent]
})
export class AppModule {
}
