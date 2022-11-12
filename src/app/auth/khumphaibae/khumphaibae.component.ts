import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-khumphaibae',
  templateUrl: './khumphaibae.component.html',
  styleUrls: ['./khumphaibae.component.css']
})
export class KhumphaibaeComponent implements OnInit {

  constructor(
    private http: HttpClient

  ) {

    // background: #1b1b1b;
    // color: white;
    // font-family: "Bungee", cursive;
    // margin-top: 50px;
    // text-align: center;
      document.body.style.backgroundColor='#332851'
   }
  readonly BaseURI="https://bae-back.alta1212.repl.co/";

   addnew(a){
    const headers = new HttpHeaders()
    .set('Authorization', 'my-auth-token')
    .set('Content-Type', 'application/json');
    this.http.post(this.BaseURI+"newd",JSON.stringify({'pass':a}),{responseType: 'json', headers: headers}).subscribe(
      (res:any) => {
        console.log(res)
        localStorage.setItem('token',res)
        alert('Đúng bae rùi')
        
        window.location.href='heart/main'
  
      },
      err => {
        if(err.status!==401)
        alert('Hình như có lũi rùi em chụp mh gửi anh nhá \n'+JSON.stringify(err))
        else
        {
          alert('nah not bae ')
        }
      }
    );








   }
   
  ngOnInit(): void {
    


  }

}
