import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleService {

  constructor(private http:HttpClient) { }

  /*loadClient(){
  gapi.client.setApiKey("102685677072-pkqruls9lqlhvfdhhov8ftmotcog2nlc.apps.googleusercontent.com");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
  }*/

  loadPlaylist(){
    //snippet,contentDetails
    //snippet.author
      /*let part= [
        "snippet,contentDetails"
      ]
    return this.http.get(`https://www.googleapis.com/youtube/v3/playlists/${part}`)*/
  }
}
