import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <article class="card">
      @if (icon()) { <div class="icon" aria-hidden="true">{{ icon() }}</div> }
      <h3>{{ title() }}</h3>
      <p>{{ description() }}</p>
      <ng-content />
    </article>
  `,
  styles: [`
    .card {
      background: linear-gradient(180deg, var(--color-surface), var(--color-surface-2));
      border: 1px solid var(--color-border);
      border-radius: var(--radius-lg);
      padding: 28px;
      height: 100%;
      transition: transform .2s ease, border-color .2s ease, box-shadow .2s ease;
      box-shadow: var(--shadow-md);
    }
    .card:hover {
      transform: translateY(-3px);
      border-color: rgba(79,124,255,0.5);
    }
    .icon {
      font-size: 28px;
      width: 56px; height: 56px;
      display: grid; place-items: center;
      border-radius: 14px;
      background: rgba(79,124,255,0.15);
      margin-bottom: 18px;
    }
    h3 { font-size: 20px; margin: 0 0 8px; }
    p { color: var(--color-text-muted); margin: 0; }
  `],
})
export class CardComponent {
  readonly icon = input<string>('');
  readonly title = input.required<string>();
  readonly description = input.required<string>();
}
