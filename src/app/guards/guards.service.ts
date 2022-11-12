import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, window } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardsService implements CanActivate {
 
  public loader = true;
  public isbae = true;
  public isSetpass=false;
  constructor(private router:Router,
   
    private http: HttpClient,
    
    private jwtSevice:JwtHelperService,
    
    ) {

   

     }
    readonly BaseURI="https://bae-back.alta1212.repl.co/";


  async canActivate()
  {
    console.log("s")

    var token=localStorage.getItem('token')
    
        
    //token
    
    const headers = new HttpHeaders()
    .set('Authorization', 'my-auth-token')
    .set('Content-Type', 'application/json');
    const get=await this.http.post(this.BaseURI+"auth/checktoken",JSON.stringify({token:token}),{responseType: 'json', headers: headers}).toPromise();
    console.log(get)
   
    if(!token)
      {
        debugger
        if(get['length']===0)
        {
          location.href='/'

        }
         else if(get['isbae']===false)
        {
          location.href='/khumphaibae'
        }
        
        
         return false;
      }
     

       
        this.loader=false;
        console.log(get)
        if(get['isbae']===false)
        {
          if(get['length']===1)
          {
             location.href='/khumphaibae'

          }
          else
          {
            location.href='/'
          }
       

        }
      
          return get['isbae']===true;

  }

}