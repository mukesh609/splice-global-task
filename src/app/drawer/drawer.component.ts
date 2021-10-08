import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent implements OnInit {
  // @Input() display!: boolean;

  not: any[] = [{
    title: 'your order is placed',
    date: '12 march',
    desc: 'System reboot has been completed',
    icon: 'fa fa-smile-o'

  },
  {
    title: 'your order is placed',
    date: '12 march',
    desc: 'System reboot has been completed',
    icon: 'fa fa-bell'

  },
  {
    title: 'your order is placed',
    date: '12 march',
    desc: 'System reboot has been completed',
    icon: "fa fa-check-circle-o"
  },
  {
    title: 'your order is placed',
    date: '12 march',
    desc: 'System reboot has been completed',
    icon: "fa fa-exclamation"
  }];

  messages: any[] = [{
    title: 'jhon',
    date: '10 july',
    desc: 'Congratulation, you created blog',
    icon: "fa fa-user"
  }, {
    title: 'jhon',
    date: '10 july',
    desc: 'Congratulation, you created blog',
    icon: "fa fa-user"

  },
  {
    title: 'jhon',
    date: '10 july',
    desc: 'Congratulation, you created blog',
    icon: "fa fa-user"

  },
  {
    title: 'jhon',
    date: '10 july',
    desc: 'Congratulation, you created blog',
    icon: "fa fa-user"

  }];

  menu: any[] = ['profile', 'message', 'setting', 'Download', 'Support', 'Sign-out']

  constructor() { }

  ngOnInit(): void {
    // console.log(this.display)
  }

}
