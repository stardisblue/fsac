import Rbush from 'rbush';
import type { Circle as Circle } from './circle';
export declare function ref<T>(v: T): Ref<T>;
export declare type Ref<T = any> = {
    v: T;
};
export declare class CircleRbush extends Rbush<Ref<Circle>> {
    toBBox(item: Ref<Circle>): {
        minX: number;
        minY: number;
        maxX: number;
        maxY: number;
    };
    compareMinX(a: Ref<Circle>, b: Ref<Circle>): number;
    compareMinY(a: Ref<Circle>, b: Ref<Circle>): number;
}
export declare type FSACOptions<T> = {
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
export declare type FSACCircleOptions = {
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
export default function fsac<T = any>(clusters: T[], opts: FSACOptions<T>): T[];
export default function fsac(clusters: Circle[], opts?: FSACCircleOptions): Circle[];
//# sourceMappingURL=index.d.ts.map