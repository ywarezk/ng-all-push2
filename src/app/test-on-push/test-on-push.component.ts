import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-test-on-push',
  template: ` <p>test-on-push works!</p> `,
  styles: [],
})
export class TestOnPushComponent {}
