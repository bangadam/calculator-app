import React, { Component, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Button from './components/Button';
import Row from './components/Row';
import calculator, { initialState } from './util/calculator';
// import * as ScreenOrientation from 'expo-screen-orientation';

// const [orientationIsLandscape,setOrientation] = useState(true);
// create class component of App
export default class App extends Component {
  state = initialState;

  // handle tap method
  HandleTap = (type, value) => {
    this.setState((state) => calculator(type, value, state));
  };

  // render method
  render() {
    return (
      <View style={styles.container}>
        {/* Status bar here */}
        <SafeAreaView>
          <Text style={styles.value}>
            {parseFloat(this.state.currentValue).toLocaleString()}
          </Text>

          {/* Do create componentRow */}
          <Row>
            <Button
              text='Rad'
              theme='secondary'
              onPress={() => this.HandleTap('clear')}
            />

            <Button
              text='Deg'
              theme='secondary'
              onPress={() => this.HandleTap('posneg')}
            />

            <Button
              text='x!'
              theme='secondary'
              onPress={() => this.HandleTap('percentage')}
            />

            <Button
              text='('
              theme='accent'
              onPress={() => this.HandleTap('leftparen')}
            />
            <Button
              text=')'
              theme='accent'
              onPress={() => this.HandleTap('operator', '/')}
            />
            <Button
              text='%'
              theme='accent'
              onPress={() => this.HandleTap('percentage')}
            />
            <Button
              text='AC'
              theme='accent'
              onPress={() => this.HandleTap('clear')}
            />
          </Row>

          {/* Number */}
          <Row>
            <Button text='Inv' onPress={() => this.HandleTap('number', 7)} />
            <Button text='sin' onPress={() => this.HandleTap('number', 8)} />
            <Button text='ln' onPress={() => this.HandleTap('number', 9)} />
            <Button text='7' onPress={() => this.HandleTap('number', 7)} />
            <Button text='8' onPress={() => this.HandleTap('number', 8)} />
            <Button text='9' onPress={() => this.HandleTap('number', 9)} />
            <Button
              text={'\u00F7'}
              theme='accent'
              onPress={() => this.HandleTap('operator', '/')}
            />
          </Row>

          <Row>
            <Button
              text={'\u03C0'}
              onPress={() => this.HandleTap('number', 7)}
            />
            <Button text='cos' onPress={() => this.HandleTap('number', 8)} />
            <Button text='log' onPress={() => this.HandleTap('number', 9)} />
            <Button text='5' onPress={() => this.HandleTap('number', 5)} />
            <Button text='6' onPress={() => this.HandleTap('number', 6)} />
            <Button text='7' onPress={() => this.HandleTap('number', 7)} />
            <Button
              text={'\u00D7'}
              theme='accent'
              onPress={() => this.HandleTap('operator', '*')}
            />
          </Row>

          <Row>
            <Button
              text={'\u0065'}
              onPress={() => this.HandleTap('number', 7)}
            />
            <Button text='tan' onPress={() => this.HandleTap('number', 8)} />
            <Button
              text={'\u221A'}
              onPress={() => this.HandleTap('number', 9)}
            />
            <Button text='1' onPress={() => this.HandleTap('number', 1)} />
            <Button text='2' onPress={() => this.HandleTap('number', 2)} />
            <Button text='3' onPress={() => this.HandleTap('number', 3)} />
            <Button
              text='-'
              theme='accent'
              onPress={() => this.HandleTap('operator', '-')}
            />
          </Row>

          <Row>
            <Button text='Ans' onPress={() => this.HandleTap('number', 7)} />
            <Button text='EXP' onPress={() => this.HandleTap('number', 8)} />
            <Button
              text={'x\u02b8'}
              onPress={() => this.HandleTap('number', 9)}
            />
            <Button text='0' onPress={() => this.HandleTap('number', 0)} />
            <Button text='.' onPress={() => this.HandleTap('number', '.')} />
            <Button
              text='='
              theme='primary'
              onPress={() => this.HandleTap('equal', '=')}
            />
            <Button
              text='+'
              theme='accent'
              onPress={() => this.HandleTap('operator', '+')}
            />
          </Row>
        </SafeAreaView>
      </View>
    );
  }
}

// create styles of app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    justifyContent: 'flex-end',
  },
  value: {
    color: '#fff',
    fontSize: 42,
    textAlign: 'right',
    marginRight: 20,
    marginBottom: 10,
  },
});
