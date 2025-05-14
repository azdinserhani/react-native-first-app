import { icons } from '@/constants/icons'
import React from 'react'
import { Image, StyleSheet, TextInput, View } from 'react-native'

interface props {
    onPress?: () => void
    placeholder: string
}

const SearchBar = ({ onPress, placeholder }: props) => {
    return (
        <View className='flex-row items-center bg-dark-200 px-5 py-4 rounded-full'>
            <Image
                source={icons.search}
                className='size-5'
                resizeMode='contain'
                tintColor={'#ab8bff'}
            />
            <TextInput onPress={onPress} placeholder={placeholder} value='' onChangeText={() => { }} placeholderTextColor={"#ab8bff"} className='w-full' />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({})