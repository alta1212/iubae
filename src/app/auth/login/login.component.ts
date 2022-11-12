
import { Component, ViewEncapsulation ,OnInit} from '@angular/core';
import 'css-doodle';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GuardsService } from 'src/app/guards/guards.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  readonly BaseURI="https://bae-back.alta1212.repl.co/";
  public load=true;
  constructor(
    private http: HttpClient,
    private router: Router,
    public GuardsService: GuardsService
    ) { }

  setPassword(a)
  {
    const headers = new HttpHeaders()
    .set('Authorization', 'my-auth-token')
    .set('Content-Type', 'application/json');
    if(a.length==0)
    {
      alert('Chưa nhập pass kìa bae')
      return;
    }
    var data = { pass : a};
   // return this.http.get(this.BaseURI+"",{responseType: 'json'});
   this.http.post(this.BaseURI+"auth/createpass",JSON.stringify(data),{responseType: 'json', headers: headers}).subscribe(
    (res:any) => {
      console.log(res)
      localStorage.setItem('token',res)
      alert('Xong rùi giờ mỗi máy em vào được thui :v anh cũng hông biết pass đou :3')
     
      window.location.href='heart/main'

    },
    err => {
      alert('Hình như có lũi rùi em chụp mh gửi anh nhá \n'+JSON.stringify(err))
    }
  );
  }
  ngOnInit(): void {
    this.http.get(this.BaseURI+"checkSetpass",{responseType: 'json'}).subscribe(
      (res:any) => {
        console.log(res)
        this.load=false;
       if(res===1)
        {
          window.location.href='heart/main'
        }
       
      },
      err => {
        alert('Hình như có lũi rùi em chụp mh gửi anh nhá \n'+JSON.stringify(err))
      }
    );

  }

}
