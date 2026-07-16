import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Modal, Pressable, SafeAreaView, ScrollView, Text, useWindowDimensions, View } from 'react-native';
import { AboutScreen } from './src/screens/AboutScreen';
import { CookiesScreen } from './src/screens/CookiesScreen';
import { HomeScreen } from './src/screens/HomeScreen';
import { PrivacyScreen } from './src/screens/PrivacyScreen';
import { ProductsScreen } from './src/screens/ProductsScreen';
import { TermsScreen } from './src/screens/TermsScreen';
import { LogoMark, NavButton, Pattern, Screen, styles } from './src/site';

export default function App() {
  const [screen, setScreen] = useState<Screen>('home');
  const [activePattern, setActivePattern] = useState<Pattern | null>(null);
  const { width } = useWindowDimensions();
  const compact = width < 768;
  const stackedHero = width < 980;

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <View style={styles.appShell}>
        <View style={styles.headerWrap}>
          <View style={[styles.header, compact && styles.headerCompact]}>
            <Pressable style={styles.brand} onPress={() => setScreen('home')}>
              <LogoMark size={compact ? 30 : 34} />
              <View>
                <Text style={styles.brandName}>SIMPLICYTAS</Text>
                <Text style={styles.brandTag}>See what others miss</Text>
              </View>
            </Pressable>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.navRow}>
              <NavButton label="Home" active={screen === 'home'} onPress={() => setScreen('home')} />
              <NavButton label="Products" active={screen === 'products'} onPress={() => setScreen('products')} />
              <NavButton label="About" active={screen === 'about'} onPress={() => setScreen('about')} />
              <NavButton label="Terms" active={screen === 'terms'} onPress={() => setScreen('terms')} />
              <NavButton label="Privacy" active={screen === 'privacy'} onPress={() => setScreen('privacy')} />
              <NavButton label="Cookies" active={screen === 'cookies'} onPress={() => setScreen('cookies')} />
            </ScrollView>
          </View>
        </View>

        {screen === 'home' && (
          <HomeScreen
            compact={compact}
            stackedHero={stackedHero}
            width={width}
            setScreen={setScreen}
            setActivePattern={setActivePattern}
          />
        )}
        {screen === 'products' && <ProductsScreen compact={compact} setScreen={setScreen} />}
        {screen === 'about' && <AboutScreen compact={compact} width={width} />}
        {screen === 'terms' && <TermsScreen setScreen={setScreen} />}
        {screen === 'privacy' && <PrivacyScreen setScreen={setScreen} />}
        {screen === 'cookies' && <CookiesScreen setScreen={setScreen} />}

        <Modal visible={activePattern !== null} animationType="slide" transparent onRequestClose={() => setActivePattern(null)}>
          <View style={styles.modalBackdrop}>
            <View style={styles.modalCard}>
              <ScrollView contentContainerStyle={styles.modalScrollContent}>
                <Pressable onPress={() => setActivePattern(null)}>
                  <Text style={styles.modalBack}>← Back</Text>
                </Pressable>
                {activePattern && (
                  <>
                    <Text style={styles.modalTag}>{activePattern.tag}</Text>
                    <Text style={styles.modalHeadline}>
                      {activePattern.title}{' '}
                      <Text style={styles.tealText}>{activePattern.accent}</Text>
                    </Text>
                    <View style={[styles.modalGrid, compact && styles.oneColumnWrap]}>
                      <View style={styles.modalBlock}>
                        <Text style={styles.modalBlockLabel}>{activePattern.situationLabel}</Text>
                        <Text style={styles.modalBlockText}>{activePattern.situation}</Text>
                      </View>
                      <View style={styles.modalBlock}>
                        <Text style={styles.modalBlockLabel}>{activePattern.causeLabel}</Text>
                        <Text style={styles.modalBlockText}>{activePattern.cause}</Text>
                      </View>
                    </View>
                    <View style={styles.modalTrigger}>
                      <Text style={styles.modalTriggerLabel}>{activePattern.triggerLabel}</Text>
                      <Text style={styles.modalTriggerText}>{activePattern.trigger}</Text>
                    </View>
                    <View style={styles.modalProof}>
                      <Text style={styles.modalProofLabel}>{activePattern.proofLabel}</Text>
                      <Text style={styles.modalProofText}>{activePattern.proof}</Text>
                    </View>
                    <View style={styles.modalNothing}>
                      <Text style={styles.modalNothingLabel}>{activePattern.nothingLabel}</Text>
                      <Text style={styles.modalNothingText}>{activePattern.nothing}</Text>
                    </View>
                  </>
                )}
              </ScrollView>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}