import Rbush from 'rbush';

declare type Circle = {
    x: number;
    y: number;
    r: number;
    n: number;
    children: any;
    data?: any;
};

declare function ref<T>(v: T): Ref<T>;
declare type Ref<T = any> = {
    v: T;
};
declare class CircleRbush extends Rbush<Ref<Circle>> {
    toBBox(item: Ref<Circle>): {
        minX: number;
        minY: number;
        maxX: number;
        maxY: number;
    };
    compareMinX(a: Ref<Circle>, b: Ref<Circle>): number;
    compareMinY(a: Ref<Circle>, b: Ref<Circle>): number;
}
declare type FSACOptions<T> = {
    merge: (a: T, b: T) => T;
    overlap: (a: T, b: T) => number;
    bbox: (item: T) => {
        minX: number;
        minY: number;
        maxX: number;
        maxY: number;
    };
    Rbush: {
        new (): Rbush<Ref<T>>;
    };
    brk?: boolean;
    reverse?: boolean;
    sort?: boolean;
};
declare type FSACCircleOptions = {
    merge?: (a: Circle, b: Circle) => Circle;
    overlap?: (a: Circle, b: Circle) => number;
    bbox?: (item: Circle) => {
        minX: number;
        minY: number;
        maxX: number;
        maxY: number;
    };
    Rbush?: {
        new (): CircleRbush;
    };
    brk?: boolean;
    reverse?: boolean;
    sort?: boolean;
};
declare function fsac<T = any>(clusters: T[], opts: FSACOptions<T>): T[];
declare function fsac(clusters: Circle[], opts?: FSACCircleOptions): Circle[];

export { CircleRbush, FSACCircleOptions, FSACOptions, Ref, fsac as default, ref };
