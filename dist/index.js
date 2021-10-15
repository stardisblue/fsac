// https://github.com/stardisblue/fsac v1.0.0 Copyright (c) 2021 Fati CHEN
import Rbush from 'rbush';

function bbox(circle) {
    return {
        minX: circle.x - circle.r,
        minY: circle.y - circle.r,
        maxX: circle.x + circle.r,
        maxY: circle.y + circle.r,
    };
}
function merge(a, b) {
    const xs = a.x * a.n + b.x * b.n, ys = a.y * a.n + b.y * b.n, n = a.n + b.n;
    return Cluster(xs / n, ys / n, n, [a, b]);
}
function overlap(a, b) {
    return (a.r + b.r) ** 2 - ((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
}
function Cluster(x, y, n, children, data = null) {
    const obj = { x, y, r: Math.sqrt(n), n, children };
    if (data)
        obj.data = data;
    return obj;
}

function ref(v) {
    return { v };
}
class CircleRbush extends Rbush {
    toBBox(item) {
        return bbox(item.v);
    }
    compareMinX(a, b) {
        return a.v.x - a.v.r - (b.v.x - b.v.r);
    }
    compareMinY(a, b) {
        return a.v.y - a.v.r - (b.v.y - b.v.r);
    }
}
function fsac(clusters, { merge: merge$1 = merge, overlap: overlap$1 = overlap, bbox: bbox$1 = bbox, Rbush = CircleRbush, brk = false, reverse = false, sort = true, } = {}) {
    // deep copy
    // clusters = clusters.map((c) => ({ ...c }));
    const refs = clusters.map(ref);
    const alives = new Set(refs);
    const collision = new Rbush();
    collision.load(refs);
    for (const refCl of alives) {
        let updated = false;
        let clustered = true;
        let cluster = refCl.v;
        while (clustered) {
            clustered = false;
            const candidates = collision.search(bbox$1(cluster));
            const indexes = new Uint32Array(candidates.length);
            {
                // unloads overlaps as soon as it's not used
                const overlaps = new Float64Array(candidates.length);
                candidates.forEach((c, i) => {
                    indexes[i] = i;
                    overlaps[i] = overlap$1(cluster, c.v);
                });
                if (sort)
                    indexes.sort((a, b) => overlaps[b] - overlaps[a]);
            }
            const iterated = reverse ? indexes.reverse() : indexes;
            for (const i of iterated) {
                const refCandidate = candidates[i];
                if (refCl === refCandidate)
                    continue;
                if (overlap$1(cluster, refCandidate.v) > 0) {
                    if (!updated)
                        updated = true;
                    cluster = merge$1(cluster, refCandidate.v);
                    alives.delete(refCandidate);
                    collision.remove(refCandidate);
                    if (!clustered)
                        clustered = true;
                    if (brk)
                        break;
                }
            }
        }
        if (updated) {
            collision.remove(refCl);
            refCl.v = cluster;
            collision.insert(refCl);
        }
    }
    return Array.from(alives, ({ v }) => v);
}

export { CircleRbush, fsac as default, ref };
