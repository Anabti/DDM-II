import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';
import { Action, Heading, Page, classes, styles } from '../ballet';

export default function Contact() {
  const { turma } = useLocalSearchParams();
  const selected = classes.find(({ name }) => name === turma);
  return (
    <Page>
      <Heading eyebrow="Contato" subtitle="Veja as informações para solicitar uma aula experimental.">Vamos conversar?</Heading>
      <View style={[styles.card, { flexBasis: 'auto', flexGrow: 0, maxWidth: 640 }]}>
        <Text style={styles.cardTitle}>{selected?.name ?? 'Aula experimental'}</Text>
        <Text style={styles.copy}>O canal de atendimento do studio ainda está sendo configurado.</Text>
        <Action href="/turmas">Consultar turmas</Action>
      </View>
    </Page>
  );
}
