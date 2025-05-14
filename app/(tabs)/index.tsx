import SearchBar from '@/components/SearchBar'
import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { useRouter } from 'expo-router'
import React from 'react'
import { Image, ScrollView, StyleSheet, View } from 'react-native'


const Index = () => {
  const router = useRouter()
  const handleSearch = () => {
    router.push('/Search')
  }

  return (
    <View className='flex-1 bg-primary '>
      <Image
        source={images.bg}
        className='w-full  absolute top-0 z-0'
      />
      <ScrollView className='flex-1 px-5' showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 10, minHeight: '100%' }}>
        <Image source={icons.logo} className='w-12 h-10 mt-20 mx-auto mb-5' />
        <View className='flex-1 mt-5'>

          <SearchBar onPress={handleSearch} placeholder='Search for movies, series and more'
          />
        </View>
      </ScrollView>
    </View>
  )
}

export default Index

const styles = StyleSheet.create({})