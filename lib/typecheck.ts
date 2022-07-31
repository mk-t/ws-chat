type TypeOfTypes =
  | "bigint"
  | "boolean"
  | "function"
  | "number"
  | "symbol"
  | "undefined"
  | "string";

interface TOverloads {
  (value: unknown, expected: "bigint"): value is bigint;
  (value: unknown, expected: "boolean"): value is boolean;
  (value: unknown, expected: "function"): value is Function;
  (value: unknown, expected: "number"): value is number;
  (value: unknown, expected: "symbol"): value is Symbol;
  (value: unknown, expected: "undefined"): value is undefined;
  (value: unknown, expected: "string"): value is string;
}

export const t: TOverloads = (
  value: unknown,
  expected: TypeOfTypes
): value is never => typeof value === expected;
