import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { Camera } from 'lucide-react-native';

interface props {
    placeholder: string;
    onPress?: () => void;
}

const SearchBar = ({placeholder, onPress}: props) => {
  return (
    <View className='flex-row items-center bg-slate-900 rounded-full px-5 py-4'>
        {/* <Camera color="white" size={18} />; */}
        <TextInput
        onPress={() => {onPress}}
        placeholder={placeholder}
        value=''
        onChangeText={() => {}}
        placeholderTextColor='#a8b5db'
        className='flex-1 ml-2 text-white'
        />
    </View>
  )
}

export default SearchBar