import { Text } from 'react-native';
import { Action, Heading, Page, Split, photos, styles } from '../ballet';

export default function About() {
  return (
    <Page>
      <Split source={photos.shoes} alt="Sapatilhas de ponta penduradas na barra de ballet" wide>
        <Heading eyebrow="Sobre o studio" subtitle="No Arabesque, a técnica do ballet clássico anda junto com a musicalidade e a expressão.">Um espaço para dançar</Heading>
        <Text style={styles.copy}>As aulas combinam exercícios de barra e de centro com sequências que desenvolvem equilíbrio, coordenação e confiança. Cada turma trabalha a partir da experiência de quem está na sala.</Text>
        <Action href="/turmas">Ver as turmas</Action>
      </Split>
    </Page>
  );
}
