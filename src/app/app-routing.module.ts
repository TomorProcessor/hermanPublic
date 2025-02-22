import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'regist',
    loadChildren: () =>
      import('./pages/regist/regist.module').then((m) => m.RegistModule),
  },
  {
    path: 'news',
    loadChildren: () =>
      import('./pages/news/news.module').then((m) => m.NewsModule),
  },
  {
    path: 'guest',
    loadChildren: () =>
      import('./pages/guest/guest.module').then((m) => m.GuestModule),
  },
  {
    path: 'infos',
    loadChildren: () =>
      import('./pages/infos/infos.module').then((m) => m.InfosModule),
  },
  {
    path: 'gallery',
    loadChildren: () =>
      import('./pages/gallery/gallery.module').then((m) => m.GalleryModule),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./pages/users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'about-a',
    loadChildren: () =>
      import('./pages/about-a/about-a.module').then((m) => m.AboutAModule),
  },
  {
    path: 'about-b',
    loadChildren: () =>
      import('./pages/about-b/about-b.module').then((m) => m.AboutBModule),
  },
  {
    path: 'questions',
    loadChildren: () =>
      import('./pages/questions/questions.module').then(
        (m) => m.QuestionsModule
      ),
  },
  {
    path: 'about-college',
    loadChildren: () =>
      import('./pages/about-college/about-college.module').then(
        (m) => m.AboutCollegeModule
      ),
  },
  {
    path: 'about-services',
    loadChildren: () =>
      import('./pages/about-services/about-services.module').then(
        (m) => m.AboutServicesModule
      ),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./pages/contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: 'for-students',
    loadChildren: () =>
      import('./pages/for-students/for-students.module').then(
        (m) => m.ForStudentsModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/main/main.module').then((m) => m.MainModule),
  },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
