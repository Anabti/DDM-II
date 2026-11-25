import { Text, View } from 'react-native';
import { Action, Heading, Page, classes, styles } from '../ballet';

export default function Classes() {
  return (
    <Page>
      <Heading eyebrow="Aulas de ballet" subtitle="Escolha a turma pela faixa etária e conheça o foco de cada aula.">Encontre sua turma</Heading>
      <View style={styles.cards}>
        {classes.map(({ name, age, description }) => (
          <View key={name} style={styles.card}>
            <Text style={styles.eyebrow}>{age}</Text>
            <Text accessibilityRole="header" aria-level={2} style={styles.cardTitle}>{name}</Text>
            <Text style={styles.copy}>{description}</Text>
            <View style={{ flexGrow: 1 }} />
            <Action href={{ pathname: '/contato', params: { turma: name } }}>Tenho interesse</Action>
          </View>
        ))}
      </View>
    </Page>
  );
}
