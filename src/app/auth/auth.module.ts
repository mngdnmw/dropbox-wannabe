import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './shared/auth.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSnackBarModule } from '@angular/material';
import { AuthGuardService } from './shared/auth-guard.service';
import { LoggedInGuard } from './shared/logged-in.guard';

@NgModule({
  imports: [
    CommonModule,
    AngularFireAuthModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
  ],
  declarations: [LoginComponent],
  providers: [AuthService, AuthGuardService, LoggedInGuard]
})
export class AuthModule { }
