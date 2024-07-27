import stylex from "@stylexjs/stylex";

import { Button } from "@/components/Button";

export function Bedienfelder() {
  return (
    <div {...stylex.props(styles.wrapper)}>
      <div {...stylex.props(styles.row)}>
        <div {...stylex.props(styles.group)}>
          <Button disabled>Verarbeiten</Button>
          <Button disabled>KF1</Button>
          <Button disabled>Quittieren</Button>
        </div>
        <div {...stylex.props(styles.group)}>
          <Button disabled>Rücknehmen</Button>
          <Button disabled>Abbrechen</Button>
        </div>
      </div>
      <Button disabled>KF2</Button>
    </div>
  );
}

const styles = stylex.create({
  wrapper: {
    position: "absolute",
    left: "10px",
    right: "10px",
    bottom: "125px",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
  },
  group: {
    display: "flex",
    gap: "35px",
  },
});
