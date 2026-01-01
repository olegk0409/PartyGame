import { View, Text } from 'react-native'

const NoTitleError = ({title}) => {
  return (
    <View style={{alignItems: 'center', position: 'absolute', top: '10%', alignSelf: 'center'}}>
      <View style={{backgroundColor: 'darkred', padding: 20, borderRadius: 4}}>
        <Text style={{color: '#fff', fontSize: 20}}>{title}</Text>
      </View>
      <View
          style={{
            width: 0,
            height: 0,
            backgroundColor: 'transparent',
            borderLeftWidth: 10,
            borderRightWidth: 10,
            borderTopWidth: 20,
            borderLeftColor: 'transparent',
            borderRightColor: 'transparent',
            borderTopColor: 'darkred',
          }}
      ></View>
    </View>
  )
}

export default NoTitleError
