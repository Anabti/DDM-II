import { Text, useWindowDimensions } from 'react-native';
import { Action, Heading, Page, Split, photos, styles } from '../ballet';

export default function Home() {
  const { width } = useWindowDimensions();
  return (
    <Page>
      <Split source={photos.hero} alt="Bailarina praticando ballet em um estúdio iluminado">
        <Heading large={width >= 600} eyebrow="Studio de ballet clássico" subtitle="Aulas para crianças, jovens e adultos. Descubra o ballet em um espaço para aprender e dançar no seu ritmo.">
          Todo passo tem <Text style={styles.italic}>sua arte.</Text>
        </Heading>
        <Action href="/turmas">Conhecer as turmas</Action>
      </Split>
    </Page>
  );
}
