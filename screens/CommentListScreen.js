import React from 'react';
import { View, Text, Image, Dimensions, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import faker from 'faker';
import moment from 'moment';

const COMMENTS = [];

let n = 1;
while (n <= 100) {
  COMMENTS.push({
    id: faker.random.uuid(),
    author: faker.name.findName(),
    text: faker.lorem.sentences(),
    datetime: moment(faker.date.recent()).format('DD/MM/YYYY hh:mm')
  });
  n++;
}

class CommentListScreen extends React.Component {
  render() {
    return (
      <FlatList
        data={COMMENTS}
        keyExtractor={item => item.id}
        renderItem={this.renderComment}
        style={{ flex: 1 }}
      />
    );
  }
  renderComment(row) {
    const comment = row.item;
    return (
      <View style={styles.comment}>
        <View>
          <Text style={styles.author}>{comment.author}</Text>
        </View>
        <View>
          <Text style={styles.text}>{comment.text}</Text>
          <Text style={styles.datetime}>{comment.datetime}</Text>
        </View>
      </View>
    );
  }
}

const styles = {
  comment: {
    padding: 8,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderColor: '#bdbdbd'
  },
  author: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8
  },
  text: {
    fontSize: 14,
    lineHeight: 14 * 1.2
  },
  datetime: {
    fontSize: 12,
    color: '#898989'
  }
};

export default CommentListScreen;
