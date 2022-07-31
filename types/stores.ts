export interface GlobalStore {
  username: string | null;
  readonly setUsername: (username: string | null) => void;
}
