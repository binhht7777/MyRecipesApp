import React from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import styles from './styles';
import { categories } from '../../data/dataArrays';
import { getNumberOfRecipes } from '../../data/MockDataAPI';

import { Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';


export default class CategoriesScreen extends React.Component {
  static navigationOptions = {
    title: 'Categories'
  };

  constructor(props) {
    super(props);
  }

  onPressCategory = item => {
    const title = item.name;
    const category = item;
    this.props.navigation.navigate('RecipesList', { category, title });
  };

  renderCategory = ({ item }) => (
    // <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => this.onPressCategory(item)}>
    //   <View style={styles.categoriesItemContainer}>
    //     <Image style={styles.categoriesPhoto} source={{ uri: item.photo_url }} />
    //     <Text style={styles.categoriesName}>{item.name}</Text>
    //     <Text style={styles.categoriesInfo}>{getNumberOfRecipes(item.id)} recipes</Text>
    //   </View>
    // </TouchableHighlight>
    <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => this.onPressCategory(item)}>
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={{ uri: item.photo_url }} />
            <Body>
              <Text>{item.name}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image source={{ uri: item.photo_url }} style={{ height: 200, width: null, flex: 1 }} />
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <Icon active name="thumbs-up" />
              <Text>12 Likes</Text>
            </Button>
          </Left>
          <Body>
            <Button transparent>
              <Icon active name="chatbubbles" />
              <Text>6 Comments</Text>
            </Button>
          </Body>
          <Right>
            <Text>{getNumberOfRecipes(item.id)} Recipes</Text>
          </Right>
        </CardItem>
      </Card>
    </TouchableHighlight>

  );

  render() {
    return (

      <View>
        <FlatList
          data={categories}
          renderItem={this.renderCategory}
          keyExtractor={item => `${item.id}`}
        />
      </View>
    );
  }
}
