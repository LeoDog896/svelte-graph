// Position arithmetic

export interface Position {
  x: number;
  y: number;
}

export const single = (num: number) => ({ x: num, y: num })
export const add = (a: Position, b: Position) => ({ x: a.x + b.x, y: a.y + b.y })
export const sub = (a: Position, b: Position) => ({ x: a.x - b.x, y: a.y - b.y })
export const mul = (a: Position, b: Position) => ({ x: a.x * b.x, y: a.y * b.y })
export const div = (a: Position, b: Position) => ({ x: a.x / b.x, y: a.y / b.y })