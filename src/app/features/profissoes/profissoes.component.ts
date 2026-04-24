import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ContentService } from '../../core/services/content.service';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-profissoes',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionTitleComponent],
  templateUrl: './profissoes.component.html',
  styleUrl: './profissoes.component.scss',
})
export class ProfissoesComponent {
  private readonly content = inject(ContentService);
  protected readonly professions = this.content.getProfessions();
}
