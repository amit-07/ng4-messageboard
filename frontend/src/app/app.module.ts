import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatInputModule, MatSnackBarModule, MatToolbarModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages.component'
import { WebService } from './web.service';
import { NewMessageComponent } from './new-message.component';
import { NavComponent } from './navbar.component';
import { HomeComponent } from './home.component';
import { RegisterComponent } from './register.component';

const routes = [
              {path: '', component: HomeComponent},
              {path: 'messages', component: MessagesComponent},
              {path: 'messages/:name', component: MessagesComponent},
              {path: 'register', component: RegisterComponent}
             ];

@NgModule({
  declarations: [
    AppComponent, MessagesComponent, NewMessageComponent, NavComponent, HomeComponent, RegisterComponent],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), BrowserAnimationsModule, 
    MatToolbarModule, MatButtonModule, MatCardModule, MatSnackBarModule, HttpModule,
    MatInputModule, MatFormFieldModule, FormsModule, ReactiveFormsModule
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
