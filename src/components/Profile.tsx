import React from 'react';
import FastImage from 'react-native-fast-image';
import {StyleSheet, Text, SafeAreaView, Image, View} from 'react-native';
import {FlashList} from '@shopify/flash-list';

interface Props {
  name: string;
  isActive?: boolean;
  image?: string;
  children: React.ReactNode;
}

interface Datas {
  no: number;
  title: string;
  content: string;
}

const DATA: Datas[] = [
  {
    no: 1,
    title: '김명성 아사직전',
    content: '조개구이 각',
  },
  {
    no: 2,
    title: '김명성!',
    content: '타입스크립트 강의 사줘',
  },
  {
    no: 3,
    title: '조개구이 먹고싶다!',
    content: '조개구이 강의 사줘',
  },
];

const renderItems = ({item}: {item: Datas}) => {
  console.log(item.title);

  return (
    <View>
      <Text>{item.title}</Text>
      <Text>{item.content}</Text>
    </View>
  );
};

function Profile(props: Props) {
  const {name, isActive, image, children} = props;
  console.log(image);
  return (
    <SafeAreaView style={isActive && styles.activeStyle}>
      <Text>{name}</Text>
      <Text>이미지 왜 안나옴?</Text>
      <Image style={{width: 200, height: 200}} source={{uri: image}} />
      <FastImage style={{width: 200, height: 200}} source={{uri: image}} />
      <View>{children}</View>

      <View style={{width: 500, height: 500, backgroundColor: '#f0f0f0'}}>
        <FlashList
          data={DATA}
          renderItem={renderItems}
          estimatedItemSize={100}
        />
      </View>
    </SafeAreaView>
  );
}

Profile.defaultProps = {
  image: 'https://picsum.photos/200',
};

const styles = StyleSheet.create({
  activeStyle: {
    backgroundColor: 'yellow',
  },
});

export default Profile;
