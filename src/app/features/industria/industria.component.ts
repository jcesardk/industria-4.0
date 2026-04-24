import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ContentService } from '../../core/services/content.service';
import { CardComponent } from '../../shared/components/card/card.component';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-industria',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CardComponent, SectionTitleComponent],
  templateUrl: './industria.component.html',
  styleUrl: './industria.component.scss',
})
export class IndustriaComponent {
  private readonly content = inject(ContentService);
  protected readonly pillars = this.content.getPillars();
}
