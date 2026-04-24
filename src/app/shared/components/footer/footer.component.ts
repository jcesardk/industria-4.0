import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="site-footer">
      <div class="container footer-inner">
        <p>
          © {{ year }} — Indústria 4.0 · Trabalho acadêmico sobre ADS/BD.
        </p>
        <p class="muted">
          Construído com Angular {{ angularVersion }} · Standalone Components · OnPush
        </p>
      </div>
    </footer>
  `,
  styles: [`
    .site-footer {
      border-top: 1px solid var(--color-border);
      margin-top: 80px;
      padding: 28px 0;
      background: rgba(0,0,0,0.2);
    }
    .footer-inner {
      display: flex; flex-wrap: wrap; gap: 8px 24px;
      align-items: center; justify-content: space-between;
      color: var(--color-text-muted);
      font-size: 14px;
    }
    .muted { opacity: .8; }
  `],
})
export class FooterComponent {
  protected readonly year = new Date().getFullYear();
  protected readonly angularVersion = '19';
}
