import { Slot, Link, usePathname } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import { colors, serif } from '../ballet';

const links = [['/', 'Início'], ['/sobre', 'Sobre'], ['/turmas', 'Turmas'], ['/contato', 'Contato']];

export default function Layout() {
  const pathname = usePathname();
  return (
    <View style={styles.root}>
      <View style={styles.bar}>
        <View style={styles.header}>
          <Link href="/" accessibilityLabel="Studio Arabesque, início" style={styles.logo}>Arabesque<Text style={styles.dot}>.</Text></Link>
          <View accessibilityRole="navigation" style={styles.nav}>
            {links.map(([href, label]) => (
              <Link key={href} href={href} aria-current={href === pathname ? 'page' : undefined} style={[styles.link, href === pathname && styles.active]}>{label}</Link>
            ))}
          </View>
        </View>
      </View>
      <Slot />
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.paper },
  bar: { borderBottomWidth: 1, borderColor: colors.line, backgroundColor: '#fffafa' },
  header: { width: '100%', maxWidth: 1240, alignSelf: 'center', paddingHorizontal: 22, paddingVertical: 13, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', rowGap: 6 },
  logo: { fontFamily: serif, fontSize: 33, color: colors.ink, paddingBottom: 2 },
  dot: { color: colors.rose },
  nav: { flexDirection: 'row', flexWrap: 'wrap', gap: 14 },
  link: { fontSize: 14, fontWeight: '600', color: colors.muted, paddingVertical: 10, borderBottomWidth: 2, borderColor: 'transparent' },
  active: { color: colors.accent, borderColor: colors.rose },
});
