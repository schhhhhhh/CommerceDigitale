import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Result } from '../model/result';
import { Users } from '../model/users';
import { environment } from 'src/environments/environment';
import { JwtPayload } from '../model/jwt-payload';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user: Users;
  isAuth = true; // Ce boléen isAuth nous dira si l'utilisateur est connecté ou pas
  userSubject = new Subject<Users>() // Création d'un observable qui prend une donnée de type Users
  token: String;
  userId: string;
  isAuth$ = new BehaviorSubject<boolean>(false);
  private  apiLogin = environment;

  constructor(private http: HttpClient) { }

  emitUser(): void{
    this.userSubject.next(this.user);
  }

  // Prend en argument les données entrer par l'utilisateur et authentifié l'utilisateur
  
  authentifier(newUser: Users){
    return new Promise(
      (resolve, reject)=>{
        const url = 'http://localhost:8085/login/' + {username: newUser.username, password: newUser.password};

        this.http.get(url,).subscribe(
          (data: Result)=>{
            if(data){
              this.user = data.result;
              this.isAuth = true; // Si l'authentificaction marche isAuth passe à "true"
              this.emitUser();
              resolve(data.result);
            }else{
              console.log(data.result);
              reject(data.message);
            }
          },(error)=>{
            console.log('error : ' + error);
            reject(false);
          }
        )
      }
    );
  }

  // Création d'utilisateur
  createUser(newUser: Users){
    return new Promise(
      (resolve, reject)=>{
        const url = 'http://localhost:8085/login/' + newUser;

        this.http.get(url).subscribe(
          (data: Result)=>{
            if(data){
              this.authentifier(newUser);
              resolve(data.result);
            }else{
              reject(false);
            }
          },
          (error)=>{
            reject(error);
          }
        )
      }
    )
  }

  signup(username: string, password: string){
    //const apiLogin = 'http://localhost:8085/login/';
    return new Promise((resolve, reject)=>{
      this.http.post(this.apiLogin.LOGIN, {username, password}).subscribe(
        (signupData:JwtPayload)=>{
          if(signupData){//signupData.status === 200
            // authentifier l'utilisateur
            this.signin(username, password)
            .then(()=>{
              resolve(true);
            })
            .catch((error)=>{
              reject(error);
            });
          }else{
            reject(signupData.message);
          }
          
        },
        (error)=>{
          reject(error)
        }
      )
    })
  }

  signin(username: string, password: string){
    return new Promise((resolve, reject)=>{
      this.http.post(this.apiLogin.LOGIN, {username, password}).subscribe(
        (authData:JwtPayload)=>{
          this.token = authData.token;
          localStorage.setItem("myToken", JSON.stringify(this.token));
          console.log("my Token : " + localStorage.getItem("myToken"));
          this.isAuth = true;
          this.isAuth$.next(true);
          console.log(this.isAuth);
          resolve(true);
          return this.token;
          
        },
        (error)=>{
          reject(error)
        }
      )
    })
  }

  logout(){
    this.isAuth$.next(false);
    this.token = null;
  }
}
