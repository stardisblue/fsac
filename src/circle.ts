export type Circle = {
  x: number;
  y: number;
  r: number;
  n: number;
  children: any;
  data?: any;
};
export function bbox(circle: Circle) {
  return {
    minX: circle.x - circle.r,
    minY: circle.y - circle.r,
    maxX: circle.x + circle.r,
    maxY: circle.y + circle.r,
  };
}

export function merge(a: Circle, b: Circle) {
  const xs = a.x * a.n + b.x * b.n,
    ys = a.y * a.n + b.y * b.n,
    n = a.n + b.n;

  return Cluster(xs / n, ys / n, n, [a, b]);
}

export function overlap(a: Circle, b: Circle) {
  return (a.r + b.r) ** 2 - ((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
}

function Cluster(x: number, y: number, n: number, children: any, data = null) {
  const obj: Circle = { x, y, r: Math.sqrt(n), n, children };
  if (data) obj.data = data;
  return obj;
}
