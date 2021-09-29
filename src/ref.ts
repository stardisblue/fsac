export function ref<T>(v: T): Ref<T> {
  return { v };
}
export type Ref<T = any> = {
  v: T;
};
