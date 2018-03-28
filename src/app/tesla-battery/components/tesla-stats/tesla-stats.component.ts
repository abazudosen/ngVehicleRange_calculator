import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Stat } from '../../models/stat';

@Component({
  selector: 'app-tesla-stats',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tesla-stats.component.html',
  styleUrls: ['./tesla-stats.component.scss']
})
export class TeslaStatsComponent implements OnInit {
  
  @Input() stats: Stat[];

  constructor() { }

  ngOnInit() {
  }

}
