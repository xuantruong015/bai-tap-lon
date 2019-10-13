import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Dimensions, Image } from 'react-native';
import faker from 'faker';
import moment from 'moment';

const POSTS = [];

let n = 1;
while (n <= 100) {
  POSTS.push({
    id: faker.random.uuid(),
    author: faker.name.firstName(),
    viewed: 123,
    comments: 456,
    datetime: moment(faker.date.recent()).format('DD/MM/YYYY hh:mm'),
    imageUrl: 'https://placeimg.com/800/600/any',
    content: faker.lorem.paragraphs()
  });
  n++;
}

class HomeScreen extends React.Component {
  handlePostPressed = post => {
    this.props.navigation.navigate('post', {
      post: post
    });
  };
  render() {
    return (
      <FlatList
        data={POSTS}
        keyExtractor={item => item.id}
        renderItem={this.renderItem}
        ItemSeparatorComponent={this.renderSeparator}
        style={{ flex: 1 }}
      />
    );
  }
  renderItem = row => {
    const post = row.item;
    const imageWidth = Dimensions.get('window').width;
    const imageHeight = imageWidth * (9 / 16);
    const imageStyle = {
      width: imageWidth,
      height: imageHeight,
      resizeMode: 'cover'
    };
    const shortContent = post.content
      .split(/\s+/)
      .slice(0, 80)
      .join(' ');
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={this.handlePostPressed.bind(this, post)}
      >
        <Image source={{ uri: post.imageUrl }} style={imageStyle} />
        <View style={styles.meta}>
          <Text style={styles.metaText}>{post.author}</Text>
          <Text style={styles.metaText}>comments: {post.viewed}</Text>
          <Text style={styles.metaText}>viewed: {post.viewed}</Text>
        </View>
        <Text style={styles.content}>{shortContent}...</Text>
      </TouchableOpacity>
    );
  };
  renderSeparator() {
    return <View style={styles.separator} />;
  }
}

const fontScale = Dimensions.get('window').fontScale;

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  separator: {
    flex: 1,
    height: 16,
    backgroundColor: '#eee'
  },
  meta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    paddingBottom: 0
  },
  metaText: {
    fontSize: 14 * fontScale,
    fontWeight: 'bold'
  },
  content: {
    padding: 8,
    fontSize: 14 * fontScale,
    lineHeight: 14 * fontScale * 1.5
  }
};

export default HomeScreen;
