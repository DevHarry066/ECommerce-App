import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'xng-breadcrumb';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent implements OnInit {

  breadcrumbs$: Observable<any[]>;
  constructor(private breadcrumbsService: BreadcrumbService) { }

  ngOnInit(): void {
    this.breadcrumbs$ = this.breadcrumbsService.breadcrumbs$;
  }
}
