export class Hero {
  constructor(cfg={}) {
    this.id = (cfg.id !== undefined) ? cfg.id : null
    this.name = (cfg.name !== undefined) ? cfg.name : null
  }
}
