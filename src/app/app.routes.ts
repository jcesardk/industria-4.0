import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.component').then((m) => m.HomeComponent),
    title: 'Indústria 4.0 — Futuro das Profissões em ADS/BD',
  },
  {
    path: 'industria-4-0',
    loadComponent: () =>
      import('./features/industria/industria.component').then((m) => m.IndustriaComponent),
    title: 'O que é a Indústria 4.0',
  },
  {
    path: 'profissoes',
    loadComponent: () =>
      import('./features/profissoes/profissoes.component').then((m) => m.ProfissoesComponent),
    title: 'Profissões em ADS e Banco de Dados',
  },
  {
    path: 'mercado',
    loadComponent: () =>
      import('./features/mercado/mercado.component').then((m) => m.MercadoComponent),
    title: 'Mercado, Habilidades e Legislação',
  },
  { path: '**', redirectTo: '' },
];
