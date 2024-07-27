import stylex from "@stylexjs/stylex";

import { colors } from "@/assets/theme.stylex";
import { Bedienbereich } from "@/components/lupe/Bedienbereich";
import { Bildbereich } from "@/components/lupe/Bildbereich";

type LupeProps = Readonly<{
  children: React.ReactNode;
}>;

export function Lupe({ children }: LupeProps) {
  return (
    <div {...stylex.props(styles.wrapper)}>
      <div {...stylex.props(styles.inner)}>
        <Bildbereich>{children}</Bildbereich>
        <Bedienbereich />
      </div>
    </div>
  );
}

const styles = stylex.create({
  wrapper: {
    width: "100%",
    height: "100%",
  },
  inner: {
    width: "1280px",
    height: "1024px",
    color: colors.white,
    backgroundColor: colors.black,
  },
});
