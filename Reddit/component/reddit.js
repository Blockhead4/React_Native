import React, { Component, Fragment } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import Insert from "./insert";

// 1. API 불러오기
// 2. Reddit 게시물 정보 가져오기
// 3. 가져온 정보를 Display하기

export default class Reddit extends Component {
  state = {};

  getInfo = async () => {
    const reddit = await this.callApi();

    this.setState({ reddit });
  };

  callApi = () => {
    return fetch("https://www.reddit.com/.json?sort=new&limit=10")
      .then(response => response.json())
      .then(json => json.data.children)
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.getInfo();
  }

  renderInfo = () => {
    const contents = this.state.reddit.map(object => {
      return (
        <Fragment key={object.data.id}>
          {/* <Insert text={object.data.id} />
          <Insert text={object.data.title} /> */}
          <View>
            <Image
              source={{
                uri: object.data.thumbnail
              }}
              style={{
                width: object.data.thumbnail_width,
                height: object.data.thumbnail_height
              }}
            />
          </View>
        </Fragment>
      );
    });

    return contents;
  };

  render() {
    return (
      <ScrollView>
        {this.state.reddit} ? ( this.renderInfo() ) : (
        <Insert text="rendering..." />)
      </ScrollView>
    );
  }
}

// const styles = StyleSheet.create({
//   text: {
//     fontSize: 30,
//     fontWeight: "bold"
//   },
//   rendering: {
//     justifyContent: "center",
//     alignItems: "center"
//   }
// });
