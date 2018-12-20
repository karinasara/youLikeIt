import {
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {MediaMatcher} from '@angular/cdk/layout';
import {SessionService} from '../services/session.service';
import {Subscription} from 'rxjs';
import {ToolbarService} from '../services/toolbar.service';
import {ToolbarDirective} from './toolbar/toolbar.directive';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {MatSidenav} from '@angular/material';
import {Location} from '@angular/common';

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})

export class NavigationBarComponent implements OnInit {

  mobileQuery: MediaQueryList;

  _mobileQueryListener: () => void;

  page: string;

  pageSubs: Subscription;

  @ViewChild(ToolbarDirective) toolbar: ToolbarDirective;

  @ViewChild(MatSidenav) sideNav: MatSidenav;

  constructor(private router: Router,
              private sessionService: SessionService,
              private componentFactoryResolver: ComponentFactoryResolver,
              private toolbarService: ToolbarService,
              private location: Location,
              private userService: UserService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.pageSubs = this.sessionService.getPage().subscribe( value => {
      this.page = value;
      this.loadToolbar();
    });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    this.pageSubs.unsubscribe();
  }

  private loadToolbar() {
      const toolbarItem = this.toolbarService.toolbarMap.get(this.page);
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(toolbarItem.component);
      const viewContainerRef = this.toolbar.viewContainerRef;

      viewContainerRef.clear();
      const componentRef = viewContainerRef.createComponent(componentFactory);
      toolbarItem.data.sideNav = this.sideNav;
      toolbarItem.data.location = this.location;
      (<ToolbarComponent>componentRef.instance).data = toolbarItem.data;
      componentRef.changeDetectorRef.detectChanges();
  }

  logout(): void {
    localStorage.clear();
    this.userService.loggedUser = null;
    this.router.navigate(['/login']).then();
    this.sideNav.toggle();

  }
}
