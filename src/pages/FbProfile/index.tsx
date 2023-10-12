import React, {useEffect, useMemo, useRef} from 'react';

import {
  View,
  Animated,
  StatusBar,
  Image,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {BlurView} from 'expo-blur';
import Icon from 'react-native-vector-icons/AntDesign';
const DISABLED_COLOR = 'rgba(255, 255, 255, 0.6)';
function FbProfile() {
  const insets = useSafeAreaInsets();
  const HEADER_HEIGHT_EXPANDED = 35;
  const HEADER_HEIGHT_NARROWED = 90;
  const PROFILE_PICTURE_URI =
    'https://pbs.twimg.com/profile_images/975388677642715136/7Hw2MgQ2_400x400.jpg';

  const TRANSLATION_Y = 32;
  const PROFILE_BANNER_URI =
    'https://i.pinimg.com/564x/aa/55/41/aa5541d265687d1fb50d15e6088013d6.jpg';
  const ScrollY = useRef(new Animated.Value(0)).current;
  //   const Scale = useRef(new Animated.Value(1)).current;

  // const AnimatedFlatList =

  const AnimatedImageBackground =
    Animated.createAnimatedComponent(ImageBackground);

  const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

  const TWEETS = useMemo(
    () =>
      Array(30)
        .fill(0)
        .map((_, idx) => {
          return {
            key: idx,
            description:
              'keep go on to win as a scoder'.repeat(Math.random() * 3) + 1,
            author: 'TmKnight',
            tag: 'tmknight',
          };
        }),
    [],
  );
  const handleScroll = Animated.event(
    [{nativeEvent: {contentOffset: {y: ScrollY}}}],
    {useNativeDriver: true},
  );

  return (
    // <SafeAreaProvider>
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <StatusBar
        barStyle={'light-content'}
        translucent
        backgroundColor={'transparent'}
      />
      <View
        style={{
          zIndex: 2,
          position: 'absolute',
          top: 10 + insets.top,
          paddingHorizontal: 20,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            height: 30,
            width: 30,
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon name="arrowleft" size={16} color="white" />
        </View>
        <Animated.View
          style={{
            marginLeft: 10,
            opacity: ScrollY.interpolate({
              inputRange: [0, 40],
              outputRange: [0, 1],
            }),
          }}>
          <Text style={styles.navBarTitle}>Evan Younan</Text>
          <Text style={styles.disabledSmallText}>19.4k Tweets</Text>
        </Animated.View>
      </View>

      <AnimatedImageBackground
        source={{uri: PROFILE_BANNER_URI}}
        style={{
          width: '100%',
          height: HEADER_HEIGHT_EXPANDED + HEADER_HEIGHT_NARROWED,
          transform: [
            {
              translateY: ScrollY.interpolate({
                inputRange: [0, TRANSLATION_Y],
                outputRange: [0, -TRANSLATION_Y],
                extrapolate: 'clamp',
              }),
            },
          ],
        }}>
        {/* <AnimatedBlurView
          blurReductionFactor={11}
          intensity={96}
          tint="dark"
          style={{
            ...StyleSheet.absoluteFillObject,
            zIndex: 2,
            opacity: ScrollY.interpolate({
              inputRange: [-50, 0, 50, 100],
              outputRange: [1, 0, 0, 1],
              extrapolate: 'clamp',
            }),
          }}
        /> */}
      </AnimatedImageBackground>
      <View style={{flex: 1, paddingHorizontal: 20}}>
        <Animated.Image
          source={{uri: PROFILE_PICTURE_URI}}
          style={{
            width: 75,
            height: 75,
            marginTop: -32,
            borderRadius: 40,
            borderWidth: 4,
            borderColor: 'black',
            transform: [
              {
                scale: ScrollY.interpolate({
                  inputRange: [0, TRANSLATION_Y],
                  outputRange: [1, 0.5],
                  extrapolate: 'clamp',
                }),
              },
              {
                translateY: ScrollY.interpolate({
                  inputRange: [0, TRANSLATION_Y],
                  outputRange: [0, -150],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}
        />
        <Animated.ScrollView
          showsHorizontalScrollIndicator={false}
          style={{
            flex: 1,
            zIndex: 3,
          }}
          scrollEnabled={true}
          onScroll={handleScroll}>
          <Text
            style={[
              styles.text,
              {
                fontSize: 24,
                fontWeight: 'bold',
                marginTop: 10,
              },
            ]}>
            TmKnight
          </Text>

          <Text
            style={[
              styles.text,
              {
                fontSize: 15,
                color: 'gray',
                marginBottom: 15,
              },
            ]}>
            xqh5087@gmail.com.hk
          </Text>

          <Text style={[styles.text, {marginBottom: 15, fontSize: 15}]}>
            Same @ on every social media
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 15,
            }}>
            <Text
              style={[
                styles.text,
                {
                  fontWeight: 'bold',
                  marginRight: 10,
                },
              ]}>
              70{' '}
              <Text
                style={{
                  color: 'gray',
                  fontWeight: 'normal',
                }}>
                Following
              </Text>
            </Text>

            <Text style={[styles.text, {fontWeight: 'bold'}]}>
              106{' '}
              <Text
                style={{
                  color: 'gray',
                  fontWeight: 'normal',
                }}>
                Followers
              </Text>
            </Text>
          </View>

          {TWEETS.map((item, index) => (
            <View key={item.key} style={styles.tweet}>
              <Image
                source={{
                  uri: PROFILE_PICTURE_URI,
                }}
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 25,
                  marginRight: 10,
                }}
              />

              <View style={styles.container}>
                <Text
                  style={[
                    styles.text,
                    {
                      fontWeight: 'bold',
                      fontSize: 15,
                    },
                  ]}>
                  {item.author}{' '}
                  <Text
                    style={{
                      color: 'gray',
                      fontWeight: 'normal',
                    }}>
                    @{item.tag} · {index + 1}d
                  </Text>
                </Text>

                <Text style={[styles.text, {fontSize: 15}]}>
                  {item.description}
                </Text>
              </View>
            </View>
          ))}
        </Animated.ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: '#fff',
  },
  tweet: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'rgba(255, 255, 255, 0.25)',
  },
  navBarTitle: {fontSize: 16, fontWeight: 'bold', color: 'white'},
  disabledSmallText: {color: DISABLED_COLOR, fontSize: 12},
});

export default FbProfile;
