import { HttpClient, HttpHeaders } from '@angular/common/http';
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

    const header= new HttpHeaders();
    let apiKey='102685677072-pkqruls9lqlhvfdhhov8ftmotcog2nlc.apps.googleusercontent.com';
    return this.http.get(`https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&maxResults=25&mine=true&key=${apiKey}`)


  }
}
