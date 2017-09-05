import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { Icon } from 'react-native-elements';

class Dashboard extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    return {
      headerStyle: {
        marginTop: Platform.OS === 'android' ? 24 : 0,
      },
          headerLeft: ( <Icon
            name="menu"
            iconStyle={{marginLeft: 15, marginBottom: 5, color: 'grey'}}
            size={30}
            onPress={() => navigate('DrawerOpen')}
          />
        )
      };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Dashboard</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export { Dashboard };
