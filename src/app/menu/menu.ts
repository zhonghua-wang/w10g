export class Menu {
  id: number;
  title: string;
  path: string;
  icon?: string;
  level: number;
  show: boolean;
  parent ?: Menu;
}
