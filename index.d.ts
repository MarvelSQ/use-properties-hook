// In a .d.ts file or .ts file that is not a module:
declare module 'use-properties-hook' {
  export function useProperty<P1>(P1: P1): P1;
  export function useProperties<P1>(P1: P1): [P1];
  export function useProperties<P1, P2>(P1: P1, P2: P2): [P1, P2];
  export function useProperties<P1, P2, P3>(
    P1: P1,
    P2: P2,
    P3: P2
  ): [P1, P2, P3];
  export function useProperties<P1, P2, P3, P4>(
    P1: P1,
    P2: P2,
    P3: P3,
    P4: P4
  ): [P1, P2, P3, P4];
  export function useProperties<P1, P2, P3, P4, P5>(
    P1: P1,
    P2: P2,
    P3: P3,
    P4: P4,
    P5: P5
  ): [P1, P2, P3, P4, P5];
}
