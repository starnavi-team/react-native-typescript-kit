import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'

import { IUser } from '../../models/user'
import { getUser } from '../../redux/actions/user'
import { IRootState } from '../../redux/reducers'

interface IProps {
  user: IUser
  getUser: () => void
}

class Welcome extends PureComponent<IProps> {
  componentDidMount () {
    const { getUser } = this.props
    getUser()
  }

  render () {
    const { user } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native! (TS Edition)</Text>
        {user && (
          <Text style={styles.welcome}>
            I guess your name is
            {' '}
            {user.name}
          </Text>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
})

const mapStateToProps = ({ user }: IRootState) => ({ user })

export default connect(mapStateToProps, { getUser })(Welcome)
