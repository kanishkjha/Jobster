import { useState } from "react"
import { View, Text, ScrollView, SafeAreaView } from "react-native"

/* A library which is similar to what we know about React router */
import { Stack, useRouter } from "expo-router"

/* colors, icons, images, sizes */
import { COLORS, icons, images, SIZES } from "../constants"

/* Empty components which we have to fill */
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from "../components"

const Home = () => {

    /* This is how we create our own router */
    const router = useRouter()

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>

            {/* This 'Stack.Screen' is used to define a single page of our App, which is currently our landing page */}

            <Stack.Screen options={{
                headerStyle: { backgroundColor: COLORS.lightWhite }, headerShadowVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                ),
                headerRight: () => (
                    <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
                ),
                headerTitle: ''
            }} />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flex: 1, padding: SIZES.medium }}>
                    <Welcome />
                    <Popularjobs />
                    <Nearbyjobs />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home