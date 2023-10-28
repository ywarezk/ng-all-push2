import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-test-on-push2',
  template: `
    <p>
      test-on-push2 works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestOnPush2Component {

}
