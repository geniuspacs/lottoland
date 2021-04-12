import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { BadgeModule } from 'primeng/badge';
import { TableModule } from 'primeng/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './pages/list/list.component';
import { WinnerPipe } from './pipes/winner.pipe';
import { WinningNumbersService } from './services/winning-numbers.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    WinnerPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    TableModule,
    BadgeModule,
    AvatarModule,
    AvatarGroupModule
  ],
  providers: [
    WinningNumbersService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
