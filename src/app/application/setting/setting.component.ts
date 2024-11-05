import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.css'
})
export class SettingComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe((params)=>{
      console.log(params);
    })
  }

}
