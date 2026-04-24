import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ContentService } from '../../core/services/content.service';
import { CardComponent } from '../../shared/components/card/card.component';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-mercado',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CardComponent, SectionTitleComponent],
  templateUrl: './mercado.component.html',
  styleUrl: './mercado.component.scss',
})
export class MercadoComponent {
  private readonly content = inject(ContentService);
  protected readonly impacts = this.content.getMarketImpacts();
  protected readonly legal = this.content.getLegalTopics();
  protected readonly categories = ['Técnica', 'Analítica', 'Comportamental'] as const;

  protected skillsByCategory(category: string) {
    return this.content.getFutureSkills().filter((s) => s.category === category);
  }
}
