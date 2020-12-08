import { Component, OnInit } from '@angular/core';
import { Channel } from '../../interface/channel';
import { ActivatedRoute } from '@angular/router'
import { User } from '../../interface/user'
import { AuthService } from '../../services/auth.service'
import { NavigationService } from '../../services/navigation.service'

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.css']
})
export class ChannelListComponent implements OnInit{

  constructor(private navigator: NavigationService, private route: ActivatedRoute, private authService : AuthService) { }
  public userId
  public user
  channels: Channel[]
  ngOnInit(): void {
    this.fetchChannels()
    this.userId = this.route.snapshot.params.userId;
      this.authService.fetchUserWithId().subscribe(user => {
      this.user = user
      console.log(user)
    })
  }

  

  goToDashboard(location: any){
    this.navigator.goToDashboard(location)
  }

  fetchChannels(){
    this.authService.fetchChannels().subscribe( channels => {
      this.channels = channels
    })
  }

  addChannel(channel: Channel, user: User){
    this.authService.addChannel(channel, user).subscribe(user => {
      this.authService.fetchUserWithId().subscribe( user => {
        this.user = user
        this.goToDashboard(['join-success', user.id])
      })
    })
  }
}
