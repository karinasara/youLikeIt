import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {SessionService} from '../services/session.service';
import {ToolbarService} from '../services/toolbar.service';
import {MatDialog, MatSnackBar} from '@angular/material';
import {User} from '../dtos/User';
import {NgForm} from '@angular/forms';
import {BasicDialogComponent} from '../basic-dialog/basic-dialog.component';
import Utils from '../utils';

@Component({
  selector: 'app-profile-edition',
  templateUrl: './profile-edition.component.html',
  styleUrls: ['./profile-edition.component.css']
})
export class ProfileEditionComponent implements OnInit {

  user: User;
  profile: User;
  @ViewChild(NgForm)profileForm: NgForm;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserService,
              private sessionService: SessionService,
              private toolbarService: ToolbarService,
              public dialog: MatDialog,
              public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.initializeUser();
    this.profile =  Object.assign({}, this.user);
    this.toolbarService.addEditionToolbar('profileEdition', 'Nuevo profile', 'Editar profile', this, this.user);
    this.sessionService.loadingPage('profileEdition');
  }

  initializeUser(): void { // TODO llevar esto a una clase base
    this.user = this.userService.loggedUser;
    if (!this.userService.loggedUser) {
      this.router.navigate(['/login']).then();
    }
  }

  save(): void {
    if (this.profileForm.valid) {
      console.log('Saving profile...');

      if (this.profile.id == null) {
        this.profile.id = Utils.generateId().toString();

      } else {
        this.user.name = this.profile.name;
        // this.user.description = this.profile.description;
      }
      this.userService.updateUser(this.user.id, this.user).then(attribute => {
        this.snackBar.open('Profile guardado!', 'Ok', {
          duration: 3000,
        });
        this.router.navigate(['/profile/' + this.user.id]).then();
      });
    } else {
      this.snackBar.open('Por favor, verifica los datos ingresados...', 'Ok', {
        duration: 3000,
      });
    }
  }

  delete(id: string, name: string): void {

    const dialogRef = this.dialog.open(BasicDialogComponent, {
      data: {
        title: 'Eliminar profile', // TODO ver de cambiar de lugar esto
        content: 'Está seguro que desea eliminar el profile ' + name + '? ',
        actions: true
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // TODO
      } else {
        this.snackBar.open('Hubo un problema al eliminar el bloque, por favor inténtalo nuevamente.', 'Ok', {
          duration: 3000,
        });
      }
    });

  }


}
