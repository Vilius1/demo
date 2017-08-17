import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';


@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
 
})

export class PostComponent implements OnInit {
    ids:number;
    posts: {};     
    form = new FormGroup({
      username : new FormControl('',[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),

      ]),
      email : new FormControl('',[
        Validators.email,
        Validators.required,
      ]),
      text : new FormControl('',[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(200),
      ]),
    })
  
    get username (){
      return this.form.get('username');
    }

    get email (){
      return this.form.get('email');
    }

    get text (){
      return this.form.get('text');
    }

    private postai = this.http.get('https://jsonplaceholder.typicode.com/posts').map(res => res.json());
    private useriai = this.http.get('https://jsonplaceholder.typicode.com/users').map(res => res.json());
    private comments = this.http.get('https://jsonplaceholder.typicode.com/comments').map(res => res.json());
    
  ngOnInit() { 
    this.route.paramMap
      .subscribe(params =>{
        var id = +params.get("id");        
        this.ids = id;       
      });

     Observable.forkJoin([this.postai, this.useriai, this.comments]).subscribe(results => {
      for (var i = 0; i < results[0].length; i++) {
   	for (var j = 0; j < results[1].length; j++) {
   		if (results[0][i].userId == results[1][j].id) {
   			results[0][i].postedBy = results[1][j];
   		}
   	}
   }
   for (var i = 0; i < results[0].length; i++) {
   	results[0][i].comments = []
   	for (var j = 0; j < results[2].length; j++) {
   		if (results[0][i].id == results[2][j].postId) {
   			results[0][i].comments.push(results[2][j])
   		}
   	}
   }  var temp = results[0];        
      this.posts = temp
      
    });   
  } 

    constructor(  
    private http: Http,
    private route: ActivatedRoute) { };   
    titleCheck : boolean = false;
    emailCheck : boolean = false;
    TextCheck : boolean = false;
  
      add (username,email,body,y):void {   
        let send = {
          postId:y,
        };       
        
        this.http.post('https://jsonplaceholder.typicode.com/comments?postId='+y ,JSON.stringify(send))
        .subscribe(response =>
        this.posts[y-1].comments.push({
          postId:y,
          id:response.json(),
          name:username,
          email:email,
          body:body,
        })
      )};
        
      
}




