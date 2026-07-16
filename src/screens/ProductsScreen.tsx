import React from 'react';
import { Linking, Pressable, ScrollView, Text, View } from 'react-native';
import { products, Screen, SectionTag, styles } from '../site';

type Props = { compact: boolean; setScreen: (screen: Screen) => void };

export function ProductsScreen({ compact }: Props) {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.scrollContent}>
      <View style={styles.pageHero}><View style={styles.gridOverlay} /><View style={styles.pageHeroInner}><SectionTag>Simplicytas Intelligence360 Suite</SectionTag><Text style={styles.pageHeadline}>Four products. <Text style={styles.tealText}>One operating model.</Text></Text><Text style={styles.pageSubhead}>Four distinct products under the Intelligence360 Suite, each built to close one structural gap.</Text></View></View>
      <View style={styles.pageBody}><View style={styles.pageBodyInner}><Text style={styles.pageLede}>Each product solves one structural problem: procurement, data, portfolios, or governance. Start with one, or run all four together.</Text>{products.map((product) => <View key={product.name} style={[styles.productCard, compact && styles.productCardCompact]}><View style={styles.productSide}><Text style={styles.productName}>{product.name}</Text></View><View style={styles.productMain}><Text style={styles.productTagline}>{product.tagline}</Text><Text style={styles.productBody}>{product.body}</Text></View></View>)}<View style={styles.pullBlock}><Text style={styles.pullLabel}>Together</Text><Text style={styles.pullText}>Together, the four products form one operating model connecting data, procurement, portfolios, and governance. Every product runs on the same nine-module diagnostic sequence, from source data to business case.</Text></View></View></View>
      <View style={styles.pageCtaSection}><View style={styles.gridOverlay} /><View style={[styles.pageCtaInner, compact && styles.oneColumnWrap]}><View><Text style={styles.pageCtaTitle}>Where is value leaking in your organisation?</Text><Text style={styles.pageCtaBody}>For CEOs, CFOs, and COOs who own a data, procurement, or logistics problem, the next step is simple.</Text><Text style={styles.pageCtaBullet}>• Share one current reporting pack or operational problem.</Text><Text style={styles.pageCtaBullet}>• We respond with a structured diagnosis that becomes the basis for the conversation.</Text></View><Pressable style={styles.primaryButton} onPress={() => Linking.openURL('mailto:hello@simplicytas.com')}><Text style={styles.primaryButtonText}>Start the conversation</Text></Pressable></View></View>
    </ScrollView>
  );
}