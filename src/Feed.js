import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './styles/styles';

class Feed extends Component {
  render() {
    return (
      <View style={styles.center}>
        <Text style={styles.title}>Navigation Drawer</Text>
        <Button
          title='Go to feed Item'
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

export default Feed;
