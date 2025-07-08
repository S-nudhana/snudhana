export type CursorState = {
  x: number | null;
  y: number | null;
  elementX: number | null;
  elementY: number | null;
  elementPositionX: number | null;
  elementPositionY: number | null;
}

export type FollowCursorProps = {
  color?: string;
};