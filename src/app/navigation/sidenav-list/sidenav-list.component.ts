import {Component, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
   @Output() sidenavClose = new EventEmitter<void>();
  onCloseSidenav() {
    this.sidenavClose.emit();
  }

  ngOnInit(): void {
  }
}
