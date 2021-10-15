export declare type Circle = {
    x: number;
    y: number;
    r: number;
    n: number;
    children: any;
    data?: any;
};
export declare function bbox(circle: Circle): {
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
};
export declare function merge(a: Circle, b: Circle): Circle;
export declare function overlap(a: Circle, b: Circle): number;
//# sourceMappingURL=circle.d.ts.map