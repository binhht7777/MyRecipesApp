import React from 'react';
import {
  FlatList,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';
import styles from './styles';
import { getRecipes, getCategoryName } from '../../data/MockDataAPI';

import { Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';



export default class RecipesListScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title')
    };
  };

  constructor(props) {
    super(props);
  }

  onPressRecipe = item => {
    this.props.navigation.navigate('Recipe', { item });
  };

  renderRecipes = ({ item }) => (
    // <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => this.onPressRecipe(item)}>
    //   <View style={styles.container}>
    //     <Image style={styles.photo} source={{ uri: item.photo_url }} />
    //     <Text style={styles.title}>{item.title}</Text>
    //     <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
    //   </View>
    // </TouchableHighlight>
    <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => this.onPressRecipe(item)}>
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={{ uri: item.photo_url }} />
            <Body>
              <Text>{item.title}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image source={{ uri: item.photo_url }} style={{ height: 480, width: null, flex: 1 }} />
        </CardItem>
        <CardItem>
          <Left>
            {/* <Button transparent>
              <Icon active name="thumbs-up" />
              <Text>12 Likes</Text>
            </Button> */}
            <Text>{getCategoryName(item.categoryId)}</Text>
          </Left>
          {/* <Body>
            <Button transparent>
              <Icon active name="chatbubbles" />
              <Text>6 Comments</Text>
            </Button>
          </Body> */}
          <Right>
            <Button transparent>
              <Icon active name="ios-cart" />
              <Text style={{ textAlign: "center", marginLeft: 10 }}>Order</Text>
            </Button>
          </Right>
        </CardItem>
      </Card>
    </TouchableHighlight>

  );

  render() {
    const { navigation } = this.props;
    const item = navigation.getParam('category');
    const recipesArray = getRecipes(item.id);
    return (
      <View>
        <FlatList
          //vertical
          //showsVerticalScrollIndicator={false}
          //numColumns={2}
          data={recipesArray}
          renderItem={this.renderRecipes}
          keyExtractor={item => `${item.recipeId}`}
        />
      </View>
    );
  }
}
