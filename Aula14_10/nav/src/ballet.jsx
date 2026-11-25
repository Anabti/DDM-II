import { useEffect, useState } from 'react';
import { AccessibilityInfo, Animated, Image, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

export const colors = { paper: '#fcf5f2', ink: '#3d262d', muted: '#6e5058', accent: '#853f55', rose: '#b6657e', line: '#ecd5d9', blush: '#f5e0e4' };
export const serif = Platform.select({ web: 'Georgia, serif', ios: 'Georgia', default: 'serif' });
export const photos = {
  hero: require('../assets/ballet-studio.jpg'),
  shoes: require('../assets/ballet-shoes.jpg'),
};
export const classes = [
  { name: 'Ballet infantil', age: '4 a 8 anos', description: 'Musicalidade, equilíbrio e imaginação em aulas que apresentam os primeiros passos do ballet.' },
  { name: 'Ballet juvenil', age: '9 a 15 anos', description: 'Exercícios de barra, sequências no centro e prática de coreografias para desenvolver a técnica clássica.' },
  { name: 'Ballet adulto', age: 'A partir de 16 anos', description: 'Uma turma para começar ou retomar o ballet, com atenção à postura, à coordenação e ao ritmo de cada pessoa.' },
];

export function Page({ children }) {
  const [opacity] = useState(() => new Animated.Value(1));
  useEffect(() => {
    let mounted = true;
    let animation;
    AccessibilityInfo.isReduceMotionEnabled().then((reduced) => {
      if (!mounted || reduced) return;
      opacity.setValue(0.55);
      animation = Animated.timing(opacity, { toValue: 1, duration: 290, useNativeDriver: Platform.OS !== 'web' });
      animation.start();
    }).catch(() => {});
    return () => { mounted = false; animation?.stop(); };
  }, [opacity]);

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.grow}>
      <Animated.View accessibilityRole="main" style={[styles.page, { opacity }]}>{children}</Animated.View>
      <View style={styles.footer}><Text style={styles.footerBrand}>Arabesque.</Text><Text style={styles.footerText}>Studio de ballet clássico</Text></View>
    </ScrollView>
  );
}

export function Heading({ eyebrow, children, subtitle, large }) {
  return (
    <View style={styles.heading}>
      <Text style={styles.eyebrow}>{eyebrow}</Text>
      <Text accessibilityRole="header" aria-level={1} style={[styles.title, large && styles.large]}>{children}</Text>
      {subtitle && <Text style={styles.copy}>{subtitle}</Text>}
    </View>
  );
}

export function Split({ children, source, alt, wide }) {
  return (
    <View style={styles.split}>
      <View style={styles.splitCopy}>{children}</View>
      <View style={[styles.frame, wide && styles.wide]}>
        <Image source={source} accessibilityLabel={alt} resizeMode="cover" style={styles.photo} />
      </View>
    </View>
  );
}

export function Action({ href, children }) {
  return <Link href={href} style={styles.action}>{children} <Text aria-hidden>↗</Text></Link>;
}

export const styles = StyleSheet.create({
  scroll: { flex: 1 },
  grow: { flexGrow: 1 },
  page: { width: '100%', maxWidth: 1240, flexGrow: 1, alignSelf: 'center', paddingHorizontal: 22, paddingTop: 44, paddingBottom: 52, gap: 32 },
  heading: { gap: 13, maxWidth: 670 },
  eyebrow: { color: colors.accent, fontSize: 12, letterSpacing: 2.5, textTransform: 'uppercase', fontWeight: '700' },
  title: { fontFamily: serif, fontSize: 49, lineHeight: 55, color: colors.ink, letterSpacing: -2 },
  large: { fontSize: 65, lineHeight: 68, letterSpacing: -3 },
  italic: { fontStyle: 'italic', color: colors.accent },
  copy: { fontSize: 17, lineHeight: 28, color: colors.muted, maxWidth: 580 },
  split: { flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', gap: 32 },
  splitCopy: { flexGrow: 1, flexShrink: 1, flexBasis: 440, gap: 22 },
  frame: { flexGrow: 1, flexShrink: 1, flexBasis: 410, aspectRatio: 1.15, backgroundColor: colors.blush, borderTopLeftRadius: 120, borderTopRightRadius: 120, overflow: 'hidden' },
  wide: { aspectRatio: 1.45 },
  photo: { width: '100%', height: '100%' },
  action: { alignSelf: 'flex-start', borderRadius: 30, backgroundColor: colors.accent, color: '#fffafa', fontWeight: '700', fontSize: 14, paddingHorizontal: 21, paddingVertical: 14 },
  cards: { flexDirection: 'row', flexWrap: 'wrap', gap: 16 },
  card: { flexGrow: 1, flexShrink: 1, flexBasis: 275, backgroundColor: '#fffafa', borderWidth: 1, borderColor: colors.line, borderRadius: 20, padding: 24, gap: 13 },
  cardTitle: { fontFamily: serif, fontSize: 29, color: colors.ink },
  footer: { borderTopWidth: 1, borderColor: colors.line, padding: 22, alignItems: 'center', gap: 4 },
  footerBrand: { fontFamily: serif, color: colors.accent, fontSize: 23 },
  footerText: { color: colors.muted, fontSize: 13 },
});
