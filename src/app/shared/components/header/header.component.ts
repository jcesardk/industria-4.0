import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavItem {
  label: string;
  path: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  protected readonly menuOpen = signal(false);

  protected readonly navItems: readonly NavItem[] = [
    { label: 'Início', path: '/' },
    { label: 'Indústria 4.0', path: '/industria-4-0' },
    { label: 'Profissões', path: '/profissoes' },
    { label: 'Mercado', path: '/mercado' },
  ];

  protected toggle(): void {
    this.menuOpen.update((v) => !v);
  }

  protected close(): void {
    this.menuOpen.set(false);
  }
}
