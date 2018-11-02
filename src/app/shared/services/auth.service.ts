import { AppUser } from 'shared/models/app-user';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './user.service';
import 'rxjs/add/observable/of';
import { Observable  } from 'rxjs';
import * as firebase from 'firebase';
import { switchMap } from 'rxjs/internal/operators/switchMap';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<firebase.User>;

  constructor(
    private userService:UserService,
    private afAuth:AngularFireAuth,
    private route:ActivatedRoute) { 

    this.user$ = afAuth.authState;  
  }

  login(){
  let returnUrl =  this.route.snapshot.queryParamMap.get('returnUrl') || '/';
  localStorage.setItem('returnUrl',returnUrl);
  
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout(){
     this.afAuth.auth.signOut();
  }

  
  get appUser$() : Observable<AppUser> {
    return this.user$.pipe(
      switchMap((user) => {
  
        if (user) return this.userService.get(user.uid);

      return Observable.of(null);
     })
    )

    }
  }
// return this.user$,
// switchMap(user => this.userService.get(user.uid));

// return this.user$
// .switchMap(user => {
//   if (user) return this.userService.get(user.uid);

//   return Observable.of(null);
// });   