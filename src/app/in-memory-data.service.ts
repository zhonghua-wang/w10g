import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let menu = [
      {
        id: 1,
        title: 'Home',
        path: '/',
        level: 0,
        show: true
      },
      {
        id: 2,
        title: 'Learn Ng2',
        path: 'learn-ng2',
        level: 0,
        show: true
      },
      {
        id: 3,
        title: 'About',
        path: 'about',
        level: 0,
        show: true
      }
    ];
    return {menu};
  }
}
