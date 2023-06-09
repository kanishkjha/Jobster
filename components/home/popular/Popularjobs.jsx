import React, { useStates } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './popularjobs.style'
import { COLORS, SIZES } from "../../../constants"
import PopularJobCard from "../../../components/common/cards/popular/PopularJobCard"

const Popularjobs = () => {
  const router = useRouter()
  const isLaoding = false
  const error = false

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary}></ActivityIndicator>
        ) : error ? (<>
          <Text>Something went wrong</Text></>) :
          (
            <FlatList data={[1, 2, 3, 4]}
              renderItem={({ item }) => (
                <PupularJobCard item={item} />

              )
              }
              keyExtractor={item => item?.job_id}
              contentContainerStyle={{ columnGap: SIZES.small }}
              horizontal
            />
          )}
      </View>
    </View>
  )
}

export default Popularjobs