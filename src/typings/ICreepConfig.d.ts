interface ICreepConfig {
  name: string;
  spawner: string | string[];
  defaultTask?: string;
  defaultTaskArgs?: any[];
}