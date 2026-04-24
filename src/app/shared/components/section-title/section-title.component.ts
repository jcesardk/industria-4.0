import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="section-title">
      @if (eyebrow()) { <span class="eyebrow">{{ eyebrow() }}</span> }
      <h2>{{ title() }}</h2>
      @if (subtitle()) { <p>{{ subtitle() }}</p> }
    </header>
  `,
  styles: [`
    .section-title { max-width: 780px; margin: 0 auto 40px; text-align: center; }
    .eyebrow {
      display: inline-block;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 12px;
      font-weight: 700;
      color: var(--color-accent);
      margin-bottom: 10px;
    }
    h2 { font-size: clamp(28px, 4vw, 40px); margin: 0 0 12px; }
    p { color: var(--color-text-muted); font-size: 17px; margin: 0; }
  `],
})
export class SectionTitleComponent {
  readonly eyebrow = input<string>('');
  readonly title = input.required<string>();
  readonly subtitle = input<string>('');
}
